const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
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
                sourceMap: true,
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
   new UglifyJSPlugin({
     sourceMap: true
   }),
   new ExtractTextPlugin('styles.css')
  ]
});
