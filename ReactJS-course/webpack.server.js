const path = require("path");
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common');


module.exports = merge(common, {
  name: 'server',
  mode: 'development',
  target: 'node',
  entry: './src/server/server.js',
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, "/server"),
    filename: 'server_bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /src/,
        loader: 'css-loader',
        options: {
          exportOnlyLocals: true,
        },
      },
    ],
  },
});