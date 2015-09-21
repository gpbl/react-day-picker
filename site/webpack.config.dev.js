import webpack from "webpack";
import path from "path";

export default {
  devtool: "cheap-module-eval-source-map",

  entry: {
    "main": [
      "webpack-dev-server/client?http://0.0.0.0:3000",
      "webpack/hot/only-dev-server",
      path.join(__dirname, "src/main.js")
    ]
  },

  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/js/",
    filename: "[name].js"
  },

  plugins: [

    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),

    // hot loader
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    // ignore moment locales
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)

  ],

  module: {
    loaders: [{
      test: /\.js(x)?$/,
      include: [path.join(__dirname, "./src"), path.join(__dirname, "../dist")],
      loaders: ["react-hot", "babel?cacheDirectory"]
    }, {
      test: /\.scss?$/,
      loaders: ["style", "css", "autoprefixer-loader?browsers=last 2 version", "sass-loader"]
    }, {
      test: /\.css$/,
      loaders: ["style", "css"]
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
