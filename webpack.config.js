import webpack from 'webpack'
import path from 'path'
import HthmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  noInfo: true,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    fileName: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    moduleDirectories: ['node_modules', 'app'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        include: __dirname,
        loaders: [
          'babel?presets[]=es2015,presets[]=react'
        ]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  sassLoader: [
    path.resolve(__dirname, './app/assets/style')
  ],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
