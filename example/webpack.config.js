module.exports = {
  entry: './src/jsx/main.jsx',

  output: {
    path: './js',
    publicPath: '/js/',
    filename: 'main.js'
  },
  
  resolve: { extensions: ['', '.js'] },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['6to5-loader'] },
      { test: /\.scss?$/, loaders: ['style', 'css', 'autoprefixer-loader?browsers=last 2 version', 'sass-loader'] },
      { test: /\.svg$/, loader: "url-loader?limit=100000&mimetype=image/svg+xml" }
    ]
  },
  devtool: 'source-map'
};