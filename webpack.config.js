'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
let path = require('path');
let autoprefixer = require('autoprefixer');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + '/src',
    entry: {
        getJson: ['webpack-dev-server/client','webpack/hot/dev-server','es6-promise', 'whatwg-fetch', './js/getJson'],
        //main: './scss/main.scss'
    },
    output: {
        path: __dirname + '/build/js',
        filename: '[name].js',
        library: '[name]'
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                test: /\.js$/,
                exclude: /node_modules/,
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015']
                },
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader!postcss-loader'
            },
            {
              test: /\.scss$/,
              loader: 'style!css-loader!postcss-loader!sass-loader'
            }
            /*{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css-loader!postcss-loader")
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract("css-loader!postcss-loader!sass-loader")
            }*/
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 3 versions'] }) ],
    
    devtool: NODE_ENV == 'development' ? "cheap-module-source-map" : null,

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
        //new ExtractTextPlugin('css/[name].css')
    ],

    devServer: {
        //contentBase: __dirname + '/backend',
        hot: true
    },
    resolve: {
    root: [
        path.resolve('./src/js'),
        path.resolve('./src/scss'),
    ],
    extensions: ['', '.js', '.scss']
  }

};
