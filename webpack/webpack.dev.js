const __PATH    = require('./paths');
const { merge } = require('webpack-merge');
const common    = require('./webpack.common.js');

module.exports = merge(common, {
  mode:     'development',
  devtool:  'inline-source-map',

  output: {
    path:           __PATH.build,
    publicPath:     '/',
    filename:       '[name].dev.js',
    chunkFilename:  'js/chunks/[name]-[id].js'
  }
})
