// dependencies
require('babel-register');
const express = require('express');
const app = express();
const router = require('./router').default;

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
