'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    context: __dirname + '/\src/\js',
    entry: {
        getJson: ['es6-promise', 'whatwg-fetch', './getJson'],
        createHtmlComponent: './createHtmlComponent'
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
            }
        }]
    },
    watch: NODE_ENV == 'development',
    devtool: NODE_ENV == 'development' ? "cheap-module-source-map" : null,

    plugins: [
        new webpack.NoErrorsPlugin(),
    ]

};
