const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  module: {
     rules: [
       {
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
       }
     ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true
  }
});
