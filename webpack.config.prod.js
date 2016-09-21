const webpack = require('webpack');
const common = require('./webpack.config.common');

const prodConfig = Object.assign({}, common, {
  entry:   [
    './src/client/main.js'
  ],
  module:  {
    loaders: [
      {
        test:    /\.jsx?/,
        loaders: 'babel',
        include: path.join(__dirname, 'src/client')
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', '!css-loader?sourceMap&importLoaders=1!postcss-loader!sass-loader?sourceMap')
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
    })
  ]
});

module.exports = prodConfig;