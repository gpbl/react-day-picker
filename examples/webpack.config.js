const webpack = require('webpack');
const path = require('path');
const rules = require('./webpack.config.rules');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src/main.js'),

  output: {
    path: path.join(__dirname, './built/js'),
    publicPath: '/js/',
    filename: 'main.js',
  },

  module: {
    rules,
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
          'Modifiers',
          'MultipleDays',
          'Range',
          'RangeAdvanced',
          'Restricted',
          'SelectableDay',
          'SimpleCalendar',
          'SimpleInput',
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
