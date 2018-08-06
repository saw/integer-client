// webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.s[c|a]ss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', {loader:'sass-loader',options:{outputStyle:'compressed'}}]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('docs', {}),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
    //   inject: false,
    //   hash: true,
      inlineSource: '.(js|css)$',
      template: './src/index.html',
      filename: 'index.html',
      minify:{    
        removeComments:true,    
        collapseWhitespace:true    
        }
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
};