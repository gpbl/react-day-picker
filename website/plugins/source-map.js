// @ts-check
/* eslint-env node */
/**
 * Docusaurus plugin to add https://webpack.js.org/loaders/source-map-loader so
 * that we can have corgi-x source maps in corgi-website for better debugging.
 * @type {import('@docusaurus/types').PluginModule}
 */
const sourceMapPlugin = () => {
  return {
    name: 'docusaurus-source-map-plugin',
    configureWebpack() {
      return {
        devtool: 'source-map',
        ignoreWarnings: [/Failed to parse source map/],
        module: {
          rules: [
            {
              test: /\.(jsx|js|ts|tsx)$/,
              enforce: 'pre',
              use: ['source-map-loader']
            }
          ]
        }
      };
    }
  };
};
module.exports = sourceMapPlugin;
