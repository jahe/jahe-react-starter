const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: path.join(__dirname, 'public'),
  hot: true,
  historyApiFallback: true
}).listen(3333, 'localhost', err => {
  if (err) {
    return console.log(err); // eslint-disable-line no-console
  }

  console.log('Listening at localhost:3333'); // eslint-disable-line no-console
});
