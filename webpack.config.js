'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
let precss       = require('precss');
let autoprefixer = require('autoprefixer');

module.exports = {
    context: __dirname + '\\src',
    entry: {
        getJson: ['es6-promise', 'whatwg-fetch', '.\\js\\getJson'],
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
              test: /\.scss$/,
              loader: 'style!css-loader!postcss-loader!sass-loader'
            }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 3 versions'] }) ],
    //watch: true,
    devtool: NODE_ENV == 'development' ? "cheap-module-source-map" : null,

    plugins: [
       new webpack.NoErrorsPlugin(),
    ]

};
