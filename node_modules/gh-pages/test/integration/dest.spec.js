var helper = require('../helper');
var ghPages = require('../../lib/');
var path = require('path');

var fixtures = path.join(__dirname, 'fixtures');
var fixtureName = 'dest';

beforeEach(function() {
  ghPages.clean();
});

describe('the dest option', function() {
  it('allows publishing to a subdirectory within a branch', function(done) {
    var local = path.join(fixtures, fixtureName, 'local');
    var expected = path.join(fixtures, fixtureName, 'expected');
    var branch = 'gh-pages';
    var dest = 'target';

    helper.setupRemote(fixtureName, branch).then(function(url) {
      var options = {
        repo: url,
        dest: dest,
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
});
