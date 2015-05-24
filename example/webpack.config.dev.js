import webpack from "webpack";
import path from "path";

export default {
  devtool: "cheap-module-eval-source-map",

  entry: {
    "main": [
      "webpack-dev-server/client?http://0.0.0.0:3000",
      "webpack/hot/only-dev-server",
      path.join(__dirname, "./src/client.js")
    ]
  },

  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/js/",
    filename: "main.js"
  },

  plugins: [

    // hot loader
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    // ignore moment locales
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)

  ],

  module: {
    loaders: [{
      test: /\.js$/,
      include: [path.join(__dirname, "./src")],
      loaders: ["react-hot", "babel?cacheDirectory"]
    }, {
      test: /\.scss?$/,
      loaders: ["style", "css", "autoprefixer-loader?browsers=last 2 version", "sass-loader"]
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=100000&mimetype=image/svg+xml"
    }]
  },

  devServer: {
    publicPath: "/js/",
    hot: true,
    historyApiFallback: true,
    quiet: true //  --no-info option
  }

};
