module.exports = {
  entry: './src/client',

  output: {
    path: './js',
    publicPath: '/js/',
    filename: 'main.js'
  },

  resolve: { extensions: ['', '.js'] },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.scss?$/, loaders: ['style', 'css', 'autoprefixer-loader?browsers=last 2 version', 'sass-loader'] },
      { test: /\.svg$/, loader: "url-loader?limit=100000&mimetype=image/svg+xml" }
    ]
  },
  devtool: 'source-map'
};
