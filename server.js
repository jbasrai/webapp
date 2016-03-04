// dependencies
var express = require('express');
var app = express();
var router = require('./router');

const webpack = require('webpack');
const config = require('./webpack.config.js');
webpack(config);
    
// setup
app.set('port', process.env.PORT || 3000);
app.set('views', 'views');
app.set('view engine', 'jade');

app.use(router);

const PORT = app.get('port');

// server 
app.listen(PORT, function() {
    console.log('webapp: Listening on port ' + PORT);
});
