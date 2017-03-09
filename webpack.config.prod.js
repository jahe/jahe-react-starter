const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const validate = require('webpack-validator');

const prodConfig = {
  devtool: 'source-map',
  entry: ['./src/client/main.js'],
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'app.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          '!css-loader?sourceMap&importLoaders=1!postcss-loader!sass-loader?sourceMap'
        )
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  postcss: function() {
    return [autoprefixer];
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('app.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};

module.exports = validate(prodConfig);
