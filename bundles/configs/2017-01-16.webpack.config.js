// const webpack = require('webpack');
const path = require('path');
console.log('in webpack config', path.resolve(__dirname,'..'));

module.exports = {

  entry: './2017-01-16/index.js',

  output: {
    filename: '2017-01-16.bundle.js',
    path: path.resolve(__dirname, '..'),
  },

  module: {
    
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot-loader', 'babel-loader'] 
      }
    ]

  },

  
  devServer: {
    contentBase: path.resolve(__dirname, '..')
  },

  devtool: 'cheap-module-eval-source-map'
}
