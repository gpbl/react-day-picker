/* eslint-env node */

module.exports = {
  entry: './DayPicker.js',
  devtool: 'source-map',
  output: {
    path: `${__dirname}/dist`,
    filename: 'DayPicker.js',
    library: 'DayPicker',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
};
