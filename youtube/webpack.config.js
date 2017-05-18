const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlusPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlusPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
    publicPath: '../'
});
const cssConfig = isProd ? cssProd : cssDev;


module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.min.js'
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
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        hot: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlusPlugin({
            filename: 'css/style.min.css',
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};
