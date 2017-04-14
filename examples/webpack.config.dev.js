import webpack from 'webpack';
import path from 'path';

const rules = require('./webpack.config.rules');

export default {
  devtool: 'source-map',

  entry: {
    main: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      path.join(__dirname, 'src/main.js'),
    ],
  },

  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/js/',
    filename: '[name].js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),

    // hot loader
    new webpack.HotModuleReplacementPlugin(),

    // add moment locales
    new webpack.ContextReplacementPlugin(
      /moment[\\/]locale$/,
      /^\.\/(ja|ar|it)$/
    ),
  ],

  module: {
    rules,
  },

  resolve: {
    alias: {
      react: path.resolve(__dirname, '../node_modules/react'),
    },
  },

  devServer: {
    publicPath: '/js/',
    hot: true,
    historyApiFallback: true,
    quiet: true, //  --no-info option
  },
};
