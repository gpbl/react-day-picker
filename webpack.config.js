/* eslint global-require: 0, import/no-extraneous-dependencies: 0 */
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
  module: {
    rules: [
      {
        test: /prop-types/,
        use: 'null-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
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
