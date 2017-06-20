var helper = require('../helper');
var ghPages = require('../../lib/');
var path = require('path');

var fixtures = path.join(__dirname, 'fixtures');
var fixtureName = 'basic';

beforeEach(function() {
  ghPages.clean();
});

describe('basic usage', function() {
  it('pushes the contents of a directory to a gh-pages branch', function(done) {
    var local = path.join(fixtures, fixtureName, 'local');
    var expected = path.join(fixtures, fixtureName, 'expected');
    var branch = 'gh-pages';

    helper.setupRemote(fixtureName, branch).then(function(url) {
      var options = {
        repo: url,
        user: {
          name: 'User Name',
          email: 'user@email.com'
        }
      };
      ghPages.publish(local, options, function(err) {
        if (err) {
          return done(err);
        }
        helper
          .assertContentsMatch(expected, url, branch)
          .then(function() {
            done();
          })
          .catch(done);
      });
    });
  });

  it('can push to a different branch', function(done) {
    var local = path.join(fixtures, fixtureName, 'local');
    var branch = 'master';

    helper.setupRemote(fixtureName, branch).then(function(url) {
      var options = {
        repo: url,
        branch: branch,
        user: {
          name: 'User Name',
          email: 'user@email.com'
        }
      };
      ghPages.publish(local, options, function(err) {
        if (err) {
          return done(err);
        }
        helper
          .assertContentsMatch(local, url, branch)
          .then(function() {
            done();
          })
          .catch(done);
      });
    });
  });
});
