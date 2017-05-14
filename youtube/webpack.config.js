var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlusPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var isProd = process.env.NODE_ENV === 'production';
var cssDev = ['style-loader', 'css-loader', 'sass-loader'];
var cssProd = ExtractTextPlusPlugin.extract({
     fallback: 'style-loader',
     use: ['css-loader', 'sass-loader'],
     publicPath: '/build'
})
var cssConfig = isProd ? cssProd : cssDev;


module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.min.js',
  },
  module: {
      rules: [
        {
            test: /\.scss$/,
            use: cssConfig
        },
        {
            test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: 'file-loader?name=[name].[ext]&outputPath=fonts/fontello/'
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /\.jpg$/,
            use: 'file-loader?name=[name].[ext]&outputPath=img/'
        }]
  },
  devServer: {
      contentBase: path.join(__dirname, "build"),
      compress: true,
      hot: true,
      open: true
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      }),
      new ExtractTextPlusPlugin({
          filename: 'css/style.css',
          disable: !isProd,
          allChunks: true
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
  ]
};
