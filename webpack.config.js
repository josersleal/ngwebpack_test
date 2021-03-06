/* global require, __dirname, module */
'use strict';
var webpack = require('webpack'),
    path = require('path');
var APP = path.join(__dirname, '/app')

module.exports = {
    context: APP,
    entry: {
        app: ['webpack/hot/dev-server', './core/bootstrap.js']
    },
    output: {
        path: APP,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: 'style!css!sass'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
