/* eslint-disable no-undef */
const path = require('path');
const shell = require('shelljs');

module.exports = {
  modules: true,
  plugins: [
    /**
     * Resolve all css @import statements from root directories. This allows
     * relative syntax as well as absolute syntax from repo root.
     *
     * ```css
     * @import './file.css';
     * @import '@plugin/file.css';
     * ```
     */
    require('postcss-import'),
    /**
     * Resolve all `url()` css statements from root directories This allows
     * relative syntax as well as absolute syntax from repo root.
     *
     * ```css
     * .text {
     *    background-image: url('../relative-path.svg');
     *    background-image: url('@plugin/file.jpg');
     * }
     * ```
     */
    require('postcss-url'),
    /**
     * Provide presets to support advanced css features. Works similarly to
     * babel presets by accessing our browserlist and providing compatability
     * for unsupported features based on target environments. We use stage 0 to
     * provide for all features.
     */
    require('postcss-preset-env')({
      stage: 0,
      preserve: true,
      /*
       * This adds all of our global styles so any advanced features defined
       * there will be polyfilled/supported.
       */
      importFrom: shell
        .find(path.resolve(__dirname, 'src/styles'))
        .filter(file => file.match(/\.css$/)),
    }),
  ],
};
