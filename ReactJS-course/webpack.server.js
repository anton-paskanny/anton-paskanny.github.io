const path = require("path");
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common');

// __dirname: true
// https://github.com/webpack/webpack/issues/1599#issuecomment-260077616

module.exports = merge(common, {
  name: 'server',
  mode: 'development',
  target: 'node',
  node: {
    __dirname: true,
  },
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