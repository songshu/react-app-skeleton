/*
    ./webpack.config.js
*/
const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    js: [
      './client/index.js'
    ]
  },
  output: {
    path: path.resolve('dist'),
    filename: 'main_bundle_[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader!sass-loader",
        }),
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin({
      filename: 'style_bundle_[hash].css',
      allChunks: true,
    }),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new webpack.ProvidePlugin({
      "ReactDOM": "react-dom",
    }),
    new webpack.ProvidePlugin({
      "ReactRouterDOM": "react-router-dom",
    })
  ]
}
