var chai = require('chai');
var tmp = require('tmp');
var path = require('path');
var fs = require('fs-extra');
var Git = require('../lib/git');
var compare = require('dir-compare').compareSync;

/**
 * Turn off maxListeners warning during the tests
 * See: https://nodejs.org/docs/latest/api/events.html#events_emitter_setmaxlisteners_n
 */
require('events').EventEmitter.prototype._maxListeners = 0;

/** @type {boolean} */
chai.config.includeStack = true;

/**
 * Chai's assert function configured to include stacks on failure.
 * @type {function}
 */
exports.assert = chai.assert;

var fixtures = path.join(__dirname, 'integration', 'fixtures');

function mkdtemp() {
  return new Promise(function(resolve, reject) {
    tmp.dir({unsafeCleanup: true}, function(err, tmpPath) {
      if (err) {
        return reject(err);
      }
      resolve(tmpPath);
    });
  });
}

function relay(value) {
  return function() {
    return value;
  };
}

function setupRemote(fixtureName, options) {
  options = options || {};
  var branch = options.branch || 'gh-pages';
  var userEmail = (options.user && options.user.email) || 'user@email.com';
  var userName = (options.name && options.user.name) || 'User Name';
  return mkdtemp()
    .then(function(remote) {
      return new Git(remote).exec('init', '--bare').then(relay(remote));
    })
    .then(function(remote) {
      return mkdtemp()
        .then(function(clone) {
          const fixturePath = path.join(fixtures, fixtureName, 'remote');
          return fs.copy(fixturePath, clone).then(relay(new Git(clone)));
        })
        .then(function(git) {
          return git.init();
        })
        .then(function(git) {
          return git.exec('config', 'user.email', userEmail);
        })
        .then(function(git) {
          return git.exec('config', 'user.name', userName);
        })
        .then(function(git) {
          return git.exec('checkout', '--orphan', branch);
        })
        .then(function(git) {
          return git.add('.');
        })
        .then(function(git) {
          return git.commit('Initial commit');
        })
        .then(function(git) {
          var url = 'file://' + remote;
          return git.exec('push', url, branch).then(relay(url));
        });
    });
}

function assertContentsMatch(dir, url, branch) {
  return mkdtemp()
    .then(function(root) {
      var clone = path.join(root, 'repo');
      var options = {git: 'git', remote: 'origin', depth: 1};
      return Git.clone(url, clone, branch, options);
    })
    .then(function(git) {
      var comparison = compare(dir, git.cwd, {excludeFilter: '.git'});
      if (comparison.same) {
        return true;
      } else {
        var message = comparison.diffSet
          .map(function(entry) {
            var state = {
              equal: '==',
              left: '->',
              right: '<-',
              distinct: '<>'
            }[entry.state];
            var name1 = entry.name1 ? entry.name1 : '<none>';
            var name2 = entry.name2 ? entry.name2 : '<none>';

            return [name1, state, name2].join(' ');
          })
          .join('\n');
        throw new Error('Directories do not match:\n' + message);
      }
    });
}

exports.setupRemote = setupRemote;
exports.assertContentsMatch = assertContentsMatch;
