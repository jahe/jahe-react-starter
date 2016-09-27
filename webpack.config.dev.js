const webpack = require('webpack');
const common = require('./webpack.config.common');
const autoprefixer = require('autoprefixer');

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
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?sourceMap&importLoaders=1!postcss-loader!sass-loader?sourceMap'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
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