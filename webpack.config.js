'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
let autoprefixer = require('autoprefixer');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + '\\src',
    entry: {
        getJson: ['es6-promise', 'whatwg-fetch', './js/getJson'],
        main: './scss/main.scss'
    },
    output: {
        path: __dirname + '/build',
        filename: '/js/[name].js',
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
                loader: ExtractTextPlugin.extract("css-loader!postcss-loader")
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract("css-loader!postcss-loader!sass-loader")
            }
            /*{
                test: /\.css$/,
                loader: 'style!css-loader!postcss-loader'
            },
            {
              test: /\.scss$/,
              loader: 'style!css-loader!postcss-loader!sass-loader'
            }*/
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 3 versions'] }) ],
    //watch: true,
    devtool: NODE_ENV == 'development' ? "cheap-module-source-map" : null,

    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('css/[name].css')
    ],

    devServer: {

    }

};
