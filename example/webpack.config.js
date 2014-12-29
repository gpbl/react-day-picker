module.exports = {
  entry: './src/main.jsx',

  output: {
    path: './js',
    publicPath: '/js/',
    filename: 'main.js'
  },
  
  resolve: { extensions: ['', '.js'] },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['6to5-loader'] },
    ]
  },
  devtool: 'source-map'
};