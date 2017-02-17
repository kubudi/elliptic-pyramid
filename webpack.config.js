/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const config = {
  devtool: 'inline-source-map',
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    path: __dirname + '/src',
    filename: './bundle.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: [/src/, /node_modules/],
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader?outputStyle=expanded',
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        query: {
          presets: [
            "es2015"
          ]
        }
      },
    ]
  }
};

module.exports = config;