// const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: __dirname,

  output: {
    filename: 'cabinets.bundle.js',
    path: path.resolve(__dirname, '../../dist')
  },

  module: {
    
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.s?css/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]

  },

  
  // devServer: {
  //   // contentBase: path.resolve(__dirname, '../dist')
  // },

  devtool: 'cheap-module-eval-source-map'
}
