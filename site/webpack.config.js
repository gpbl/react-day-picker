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
    loaders: [
    {
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loaders: ["react-hot", "babel"]
    },
    {
      test: /\.scss?$/,
      loaders: ["style", "css", "autoprefixer-loader?browsers=last 2 version", "sass-loader"]
    },
    {
      test: /\.css$/,
      loaders: ["style", "css"]
    },
    {
      test: /\.svg$/,
      loader: "url-loader?limit=100000&mimetype=image/svg+xml"
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

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
        }
    })


  ]

};
