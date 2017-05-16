// dependencies
require('babel-register');
const express = require('express');
const app = express();
const router = require('./router').default;
const webpack = require('webpack');
const devServer = require('webpack-dev-server');
const path = require('path');
const proxy = require('http-proxy').createProxyServer();

// setup
app.set('port', process.env.PORT || 9000);
app.set('devPort', process.env.DEV_PORT || 9001);
app.set('views', 'views');
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

const port = app.get('port');
const devPort = app.get('devPort');
const config = require('./webpack.config')

// dev server
if (process.env.NODE_ENV === 'development') {
    // proxy requests to dev server
    app.all('/bundle.js', function(req, res) {
        proxy.web(req, res, {
            target: 'http://localhost:' + devPort + '/build/'
        });
    });

    config.entry.unshift('webpack-dev-server/client?http://localhost:' + devPort);

    const compiler = webpack(config);

    new devServer(compiler, {
        publicPath: '/build',
        stats: { chunks: false }
    }).listen(devPort, function() {
        console.log('dev server started on port ' + devPort);
    });
} else {
    webpack(config).run(function(){});
}

app.listen(port, function() {
    console.log('webapp: Listening on port ' + port);
});
