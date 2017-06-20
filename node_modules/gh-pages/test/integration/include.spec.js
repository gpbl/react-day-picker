var helper = require('../helper');
var ghPages = require('../../lib/');
var path = require('path');

var fixtures = path.join(__dirname, 'fixtures');
var fixtureName = 'include';

beforeEach(function() {
  ghPages.clean();
});

describe('the src option', function() {
  it('can be used to limit which files are included', function(done) {
    var local = path.join(fixtures, fixtureName, 'local');
    var expected = path.join(fixtures, fixtureName, 'expected');
    var branch = 'gh-pages';

    helper.setupRemote(fixtureName, branch).then(function(url) {
      var options = {
        repo: url,
        src: '**/*.js',
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
