module.exports = {
  devtool: 'source-map',
  entry: {
    daypicker: './umd-entrypoint.js',
  },
  output: {
    path: `${__dirname}/umd`,
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
        exclude: /(node_modules)/,
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
