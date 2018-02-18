const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  devtool: '(none)',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                minimaze: true,
                sourceMap: false,
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('./dist'),
    new UglifyJSPlugin({
      sourceMap: false
    }),
    new ExtractTextPlugin('styles.css')
  ]
});
