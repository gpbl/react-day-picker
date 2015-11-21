var webpack = require("webpack");
var path = require("path");

module.exports = {
  devtool: "source-map",
  entry: path.join(__dirname, "src/main.js"),

  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/js/",
    filename: "main.js"
  },

  resolve: { extensions: ["", ".js"] },

  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
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
        except: ["Birthdays", "InputField", "Localized", "Range", "SelectableDay", "SimpleCalendar", "YearCalendar", "TouchEvents"]
      },
      compress: {
        warnings: false
      }
    })

  ]

};
