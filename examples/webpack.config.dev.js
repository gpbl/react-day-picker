import webpack from 'webpack';
import path from 'path';

export default {
  devtool: 'source-map',

  entry: {
    main: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      path.join(__dirname, 'src/main.js'),
    ],
  },

  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/js/',
    filename: '[name].js',
  },

  plugins: [

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),

    // hot loader
    new webpack.HotModuleReplacementPlugin(),

    // add moment locales
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(ja|ar|it)$/),

  ],

  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.join(__dirname, '../src'),
        path.join(__dirname, './src'),
        path.join(__dirname, '../lib'),
      ],
      loader: 'babel-loader?cacheDirectory&plugins=react-hot-loader/babel',
    }, {
      include: [
        path.join(__dirname, './src/styles/cssmodules.css'),
      ],
      loaders: ['style-loader', 'css-loader?modules=true&localIdentName=[hash:base64:5]', 'autoprefixer-loader?browsers=last 2 version'],
    },
    {
      test: /\.css$/,
      exclude: [
        path.join(__dirname, './src/styles/cssmodules.css'),
      ],
      loaders: ['style-loader', 'css-loader', 'autoprefixer-loader?browsers=last 2 version'],
    },
    {
      test: /\.svg$/,
      loader: 'url-loader?limit=100000&mimetype=image/svg+xml',
    }],
  },

  resolve: {
    alias: {
      react: path.resolve(__dirname, '../node_modules/react'),
    },
  },

  devServer: {
    publicPath: '/js/',
    hot: true,
    historyApiFallback: true,
    quiet: true, //  --no-info option
  },

};
