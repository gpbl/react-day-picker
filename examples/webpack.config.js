var webpack = require("webpack");
var path = require("path");

module.exports = {
  devtool: "source-map",
  entry: path.join(__dirname, "src/main.js"),

  output: {
    path: "./built/js",
    publicPath: "/js/",
    filename: "main.js"
  },

  resolve: { extensions: ["", ".js"] },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel"]
    }, {
      test: /\.css$/,
      loaders: ["style", "css", "autoprefixer-loader?browsers=last 2 version"]
    }]
  },

  plugins: [

    // ignore moment locales
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: [
          "Birthdays",
          "DisabledDays",
          "InputField",
          "Localized",
          "Range",
          "Restricted",
          "SelectableDay",
          "SimpleCalendar",
          "TouchEvents",
          "YearCalendar",
          "YearNavigation"
        ]
      },
      compress: {
        warnings: false
      }
    })

  ]

};
