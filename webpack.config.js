const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app/entry.js',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
};
