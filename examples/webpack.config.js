const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src/main.js'),

  output: {
    path: './built/js',
    publicPath: '/js/',
    filename: 'main.js',
  },

  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.join(__dirname, '../src'),
        path.join(__dirname, './src'),
        path.join(__dirname, '../dist'),
      ],
      loaders: ['babel'],
    }, {
      test: /\.css$/,
      loaders: ['style', 'css', 'autoprefixer-loader?browsers=last 2 version'],
    }],
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      react: path.resolve(__dirname, '../node_modules/react'),
    },
  },

  plugins: [

    // add moment locales
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(ja|ar|it)$/),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: [
          'Birthdays',
          'DisabledDays',
          'BlockedNavigation',
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
