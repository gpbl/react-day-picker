module.exports = {
  setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js',
  setupFiles: ['raf/polyfill', './test/setup.js'],
  testMatch: ['<rootDir>/test/**/!(setup).js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
