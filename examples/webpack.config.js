const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src/main.js'),

  output: {
    path: path.join(__dirname, './built/js'),
    publicPath: '/js/',
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, '../src'),
          path.join(__dirname, './src'),
          path.join(__dirname, '../lib'),
        ],
        loader: 'babel-loader',
      },
      {
        include: [path.join(__dirname, './src/styles/cssmodules.css')],
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:base64:5]',
            },
          },
          {
            loader: 'autoprefixer-loader',
            options: { browsers: 'last 2 version' },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: [path.join(__dirname, './src/styles/cssmodules.css')],
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:base64:5]',
            },
          },
          {
            loader: 'autoprefixer-loader',
            options: { browsers: 'last 2 version' },
          },
        ],
      },
    ],
  },

  plugins: [
    // add moment locales
    new webpack.ContextReplacementPlugin(
      /moment[\\/]locale$/,
      /^\.\/(ja|ar|it)$/
    ),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: [
          'AdvancedModifiers',
          'Birthdays',
          'DisabledDays',
          'BlockedNavigation',
          'CSSModules',
          'CustomElements',
          'FixedWeeks',
          'InputField',
          'InputFieldOverlay',
          'Localized',
          'LocalizedMoment',
          'LocalizedCustom',
          'Modifiers',
          'MultipleDays',
          'Range',
          'RangeAdvanced',
          'Restricted',
          'SelectableDay',
          'SimpleCalendar',
          'TouchEvents',
          'YearCalendar',
          'YearNavigation',
        ],
      },
      compress: {
        warnings: false,
      },
    }),
  ],
};
