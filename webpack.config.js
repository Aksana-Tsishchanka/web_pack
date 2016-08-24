const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: ['es6-promise', 'whatwg-fetch', './js/app'],
  },
  output: {
    path: path.join(__dirname, '/build/js'),
    filename: "[name].[hash].js",
    library: '[name]',
  },
  module: {
    loaders: NODE_ENV === 'development' ? [
      {
        loader: 'babel',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: ['style', 'css', 'postcss'],
      },
      {
        test: /\.scss$/,
        loader: ['style','css', 'postcss','sass'],
      },
    ] : [
      {
        loader: 'babel',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(['css', 'postcss'])
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract(['css', 'postcss', 'sass'])
      }
    ]

  },
  postcss: [autoprefixer({browsers: ['last 3 versions']})],

  devtool: NODE_ENV === 'development' ? 'cheap-module-source-map' : null,

  plugins: NODE_ENV === 'development' ? [
    new webpack.NoErrorsPlugin(),
  ] : [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
    }),
    new ExtractTextPlugin('css/[name][hash].css'),
    new HtmlWebpackPlugin( {
      title: 'ES 2015',
      filename: '../index.html',
      hash: true,
    }),
    new CleanWebpackPlugin(['build'], {
      root: __dirname,
      verbose: true,
      dry: false,
    })
  ],
  devServer: {},

  resolve: {
    root: [
      path.resolve('./src/js'),
      path.resolve('./src/scss'),
    ],
    extensions: ['', '.js', '.scss'],
  },
};
