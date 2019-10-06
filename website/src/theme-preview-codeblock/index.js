const path = require('path');
module.exports = function() {
  return {
    name: 'theme-preview-codeblock',
    getThemePath: () => path.resolve(__dirname, './theme'),
    configureWebpack: () => {},
  };
};
