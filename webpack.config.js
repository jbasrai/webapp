const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [ './src/App.jsx' ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};
