const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

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
     contentBase: path.resolve(__dirname, 'dist')
   }
});
