const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');
const validate = require('webpack-validator')

const devConfig = {
  devtool: 'source-map',
  entry:   [
    'webpack-dev-server/client?http://localhost:3333',
    'webpack/hot/only-dev-server',
    './src/client/main.js'
  ],
  output:  {
    path:       path.join(__dirname, 'public/dist'),
    filename:   'app.js',
    publicPath: '/dist/'
  },
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
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};

module.exports = validate(devConfig);