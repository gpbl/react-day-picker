/* eslint-env node */

/**
 * This plugins make sure that linked modules dependencies (such as React) do
 * not crash.
 */
module.exports = function() {
  return {
    name: '@gpbl/react-dev-plugin',
    configureWebpack() {
      return {
        resolve: {
          alias: {
            react: require.resolve('react'),
            // 'react-dom': require.resolve('react-dom'),
          },
        },
      };
    },
  };
};
