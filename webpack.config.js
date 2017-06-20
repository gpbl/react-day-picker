/* eslint-env node */

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    daypicker: './DayPicker.dist.js',
  },
  output: {
    path: `${__dirname}/lib`,
    filename: `[name]${isProduction ? '.min' : ''}.js`,
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
    moment: {
      root: 'moment',
      commonjs2: 'moment',
      commonjs: 'moment',
      amd: 'moment',
    },
  },
};
