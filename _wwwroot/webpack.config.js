const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../')
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};