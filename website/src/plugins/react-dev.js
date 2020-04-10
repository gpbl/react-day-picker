const path = require("path");
/**
 * This plugins make sure that linked modules dependencies (such as React) do
 * not crash.
 */
module.exports = function() {
  return {
    name: "@gpbl/react-dev-plugin",
    configureWebpack() {
      // const config = {
      //   resolve: {
      //     modules: [
      //       "node_modules",
      //       path.resolve(__dirname, "../../../node_modules/")
      //     ]
      //   }
      // };
      // console.log("Using custom config", config);
      return {};
    }
  };
};
