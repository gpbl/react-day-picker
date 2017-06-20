var ghpages = require('../../lib/index');
var sinon = require('sinon');
var cli = require('../../bin/gh-pages');

describe('gh-pages', function() {
  beforeEach(function() {
    sinon.stub(ghpages, 'publish');
  });

  afterEach(function() {
    ghpages.publish.restore();
  });

  var defaults = {
    repo: undefined,
    silent: false,
    branch: 'gh-pages',
    src: '**/*',
    dest: '.',
    message: 'Updates',
    dotfiles: false,
    add: false,
    remote: 'origin',
    push: true
  };

  var scenarions = [
    ['--dist lib', 'lib', defaults],
    ['--dist lib -n', 'lib', {push: false}],
    ['--dist lib -x', 'lib', {silent: true}],
    ['--dist lib --dotfiles', 'lib', {dotfiles: true}],
    ['--dist lib --dest target', 'lib', {dest: 'target'}],
    ['--dist lib -a', 'lib', {add: true}]
  ];

  scenarions.forEach(function(scenario) {
    var args = scenario[0].split(' ');
    var dist = scenario[1];
    var config = scenario[2];

    it(args.join(' '), function() {
      cli(['node', 'gh-pages'].concat(args));
      sinon.assert.calledWithMatch(ghpages.publish, dist, config);
    });
  });
});
