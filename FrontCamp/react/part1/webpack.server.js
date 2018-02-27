const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: './app/server.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/',
      filename: 'bundleServer.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: 'css-loader/locals'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('./dist/bundleServer.js')
  ]
};
