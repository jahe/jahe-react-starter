const webpack = require('webpack');
const common = require('./webpack.config.common');
const autoprefixer = require('autoprefixer');
const path = require('path');

const devConfig = Object.assign({}, common, {
  entry:   [
  	'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/client/main.js'
  ],
  module:  {
    loaders: [
      {
        test:    /\.jsx?/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src/client')
      }, {
        test: /\.scss$/,
        // loader: 'style-loader!css-loader?sourceMap&importLoaders=1!sass-loader?sourceMap'
        loader: 'style-loader!css-loader?sourceMap&importLoaders=1!postcss-loader!sass-loader?sourceMap'
      }
    ]
  },
  postcss: function() {
  	return [autoprefixer];
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});

module.exports = devConfig;