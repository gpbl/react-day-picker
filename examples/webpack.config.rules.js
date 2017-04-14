const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = [
  {
    test: /\.js$/,
    include: [
      path.join(__dirname, '../src'),
      path.join(__dirname, './src'),
      path.join(__dirname, '../lib'),
    ],
    loader: 'babel-loader',
  },
  {
    include: [path.join(__dirname, './src/styles/cssmodules.css')],
    loaders: [
      { loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[hash:base64:5]',
        },
      },
      { loader: 'postcss-loader', options: { plugins: [autoprefixer] } },
    ],
  },
  {
    test: /\.css$/,
    exclude: [path.join(__dirname, './src/styles/cssmodules.css')],
    loaders: [
      { loader: 'style-loader' },
      {
        loader: 'css-loader',
      },
      { loader: 'postcss-loader', options: { plugins: [autoprefixer] } },
    ],
  },
];
