const __PATH        = require('./paths');
const { merge }     = require('webpack-merge');
const common        = require('./webpack.common.js');
const TerserPlugin  = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode:     'production',
  devtool:  false,

  output: {
    path:           __PATH.build,
    publicPath:     '/',
    filename:       '[name].js',
    chunkFilename:  'js/chunks/[name]-[id].js'
  },

  optimization: {
    minimize:   true,
    minimizer:  [ new TerserPlugin() ],
  },
})
