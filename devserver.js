const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
  publicPath:         config.output.publicPath,
  contentBase:        path.join(__dirname, 'public'),
  hot:                true,
  historyApiFallback: true
}).listen(8080, 'localhost', (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at localhost:8080');
});
