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
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      }
    ]

  },

  
  devServer: {
    contentBase: path.resolve(__dirname)
  },

  devtool: 'cheap-module-eval-source-map'
}
