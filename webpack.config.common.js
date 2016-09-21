const path = require('path');

module.exports = {
  devtool: 'source-map',
  output:  {
    path:       path.join(__dirname, 'public/dist'),
    filename:   'app.js',
    publicPath: '/dist'
  }
};