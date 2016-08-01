module.exports = {
    entry: ['es6-promise','whatwg-fetch', './src/getJson.js'],
    output: {
        path: './build',
        filename: 'getJson.bundle.js'
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
    }
};
