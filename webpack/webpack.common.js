const __PATH                = require('./paths');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

module.exports = {
  entry: [__PATH.src + '/index.ts'],

  output: {
    assetModuleFilename: 'assets/[name][ext]'
  },
  
  module: {
    rules: [

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.(scss|css)$/,
        use: [

          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false
            }
          }, {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }, {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                precision:    8,
                outputStyle:  'nested',
              }
            }
          }

        ]
      }

    ],
  },


  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/chunks/[name]-[id].css',
    }),
  ],


  experiments: {
    asset: true,
  },


  performance: {
    hints:              false,
    maxEntrypointSize:  512000,
    maxAssetSize:       512000,
  },


  resolve: {
    extensions: [ '.ts', '.js', '.scss', '.json' ]
  }
}