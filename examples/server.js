/* eslint no-console:0 */
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import config from './webpack.config.dev';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true,
  },
}).listen(3000, '0.0.0.0', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Listening at 0.0.0.0:3000');
});
