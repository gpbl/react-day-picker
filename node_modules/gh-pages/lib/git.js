var cp = require('child_process');
var fs = require('fs-extra');
var path = require('path');
var util = require('util');

/**
 * @constructor
 * @param {number} code Error code.
 * @param {string} message Error message.
 */
function ProcessError(code, message) {
  var callee = arguments.callee;
  Error.apply(this, [message]);
  Error.captureStackTrace(this, callee);
  this.code = code;
  this.message = message;
  this.name = callee.name;
}
util.inherits(ProcessError, Error);

/**
 * Util function for handling spawned processes as promises.
 * @param {string} exe Executable.
 * @param {Array.<string>} args Arguments.
 * @param {string} cwd Working directory.
 * @return {Promise} A promise.
 */
function spawn(exe, args, cwd) {
  return new Promise(function(resolve, reject) {
    var child = cp.spawn(exe, args, {cwd: cwd || process.cwd()});
    var buffer = [];
    child.stderr.on('data', function(chunk) {
      buffer.push(chunk.toString());
    });
    child.stdout.on('data', function(chunk) {
      buffer.push(chunk.toString());
    });
    child.on('close', function(code) {
      var output = buffer.join('');
      if (code) {
        var msg = output || 'Process failed: ' + code;
        reject(new ProcessError(code, msg));
      } else {
        resolve(output);
      }
    });
  });
}

/**
 * Create an object for executing git commands.
 * @param {string} cwd Repository directory.
 * @param {string} exe Git executable (full path if not already on path).
 * @constructor
 */
function Git(cwd, cmd) {
  this.cwd = cwd;
  this.cmd = cmd || 'git';
  this.output = '';
}

/**
 * Execute an arbitrary git command.
 * @param {string} var_args Arguments (e.g. 'remote', 'update').
 * @return {Promise} A promise.  The promise will be resolved with this instance
 *     or rejected with an error.
 */
Git.prototype.exec = function() {
  return spawn(this.cmd, [].slice.call(arguments), this.cwd).then(
    function(output) {
      this.output = output;
      return this;
    }.bind(this)
  );
};

/**
 * Initialize repository.
 * @return {ChildProcess} Child process.
 */
Git.prototype.init = function() {
  return this.exec('init');
};

/**
 * Clean up unversioned files.
 * @return {Promise} A promise.
 */
Git.prototype.clean = function() {
  return this.exec('clean', '-f', '-d');
};

/**
 * Hard reset to remote/branch
 * @param {string} remote Remote alias.
 * @param {string} branch Branch name.
 * @return {Promise} A promise.
 */
Git.prototype.reset = function(remote, branch) {
  return this.exec('reset', '--hard', remote + '/' + branch);
};

/**
 * Fetch from a remote.
 * @param {string} remote Remote alias.
 * @return {Promise} A promise.
 */
Git.prototype.fetch = function(remote) {
  return this.exec('fetch', remote);
};

/**
 * Checkout a branch (create an orphan if it doesn't exist on the remote).
 * @param {string} remote Remote alias.
 * @param {string} branch Branch name.
 * @return {Promise} A promise.
 */
Git.prototype.checkout = function(remote, branch) {
  var treeish = remote + '/' + branch;
  return this.exec('ls-remote', '--exit-code', '.', treeish).then(
    function() {
      // branch exists on remote, hard reset
      return this.exec('checkout', branch)
        .then(
          function() {
            return this.clean();
          }.bind(this)
        )
        .then(
          function() {
            return this.reset(remote, branch);
          }.bind(this)
        );
    }.bind(this),
    function(error) {
      if (error instanceof ProcessError && error.code === 2) {
        // branch doesn't exist, create an orphan
        return this.exec('checkout', '--orphan', branch);
      } else {
        // unhandled error
        throw error;
      }
    }.bind(this)
  );
};

/**
 * Remove all unversioned files.
 * @param {string} files Files argument.
 * @return {Promise} A promise.
 */
Git.prototype.rm = function(files) {
  return this.exec('rm', '--ignore-unmatch', '-r', '-f', files);
};

/**
 * Add files.
 * @param {string} files Files argument.
 * @return {Promise} A promise.
 */
Git.prototype.add = function(files) {
  return this.exec('add', files);
};

/**
 * Commit (if there are any changes).
 * @param {string} message Commit message.
 * @return {Promise} A promise.
 */
Git.prototype.commit = function(message) {
  return this.exec('diff-index', '--quiet', 'HEAD').catch(
    function() {
      return this.exec('commit', '-m', message);
    }.bind(this)
  );
};

/**
 * Add tag
 * @param {string} name Name of tag.
 * @return {Promise} A promise.
 */
Git.prototype.tag = function(name) {
  return this.exec('tag', name);
};

/**
 * Push a branch.
 * @param {string} remote Remote alias.
 * @param {string} branch Branch name.
 * @return {Promise} A promise.
 */
Git.prototype.push = function(remote, branch) {
  return this.exec('push', '--tags', remote, branch);
};

/**
 * Get the URL for a remote.
 * @param {string} remote Remote alias.
 * @return {Promise<string>} A promise for the remote URL.
 */
Git.prototype.getRemoteUrl = function(remote) {
  return this.exec('config', '--get', 'remote.' + remote + '.url')
    .then(function(git) {
      var repo = git.output && git.output.split(/[\n\r]/).shift();
      if (repo) {
        return repo;
      } else {
        throw new Error(
          'Failed to get repo URL from options or current directory.'
        );
      }
    })
    .catch(function(err) {
      throw new Error(
        'Failed to get remote.' +
          remote +
          '.url (task must either be ' +
          'run in a git repository with a configured ' +
          remote +
          ' remote ' +
          'or must be configured with the "repo" option).'
      );
    });
};

/**
 * Clone a repo into the given dir if it doesn't already exist.
 * @param {string} repo Repository URL.
 * @param {string} dir Target directory.
 * @param {string} branch Branch name.
 * @param {options} options All options.
 * @return {Promise<Git>} A promise.
 */
Git.clone = function clone(repo, dir, branch, options) {
  return fs.exists(dir).then(function(exists) {
    if (exists) {
      return Promise.resolve(new Git(dir, options.git));
    } else {
      return fs.mkdirp(path.dirname(path.resolve(dir))).then(function() {
        var args = [
          'clone',
          repo,
          dir,
          '--branch',
          branch,
          '--single-branch',
          '--origin',
          options.remote,
          '--depth',
          options.depth
        ];
        return spawn(options.git, args)
          .catch(function(err) {
            // try again without banch or depth options
            return spawn(options.git, [
              'clone',
              repo,
              dir,
              '--origin',
              options.remote
            ]);
          })
          .then(function() {
            return new Git(dir, options.git);
          });
      });
    }
  });
};

module.exports = Git;
