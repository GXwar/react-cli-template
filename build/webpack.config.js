const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const proxy = require('http-proxy-middleware');

const config = {
  // mode: process.env.NODE_ENV || 'development',
  entry: {
    app: path.join(__dirname, '../src/index.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, './node_modules')
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, '../src/assets/template/index.html'),
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    })
  ],
  devServer: {
    port: 3000,
    contentBase: './dist'
  }
};

module.exports = config;