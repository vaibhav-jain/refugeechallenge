'use strict';

var express = require('express'),
    routes  = require('./index.js');

var mode = process.env.NODE_ENV;
var app = module.exports = express();

app.engine('html', require('ejs').renderFile);
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/app');
app.set('view engine', 'html');
app.use(express.static(__dirname + '/static'));

// development only
if (mode === 'development') {
  app.use(express.errorHandler());
}

app.get('/', function(request, response) {
  response.render('dashboard/index.html');
});

// views is directory for all template files
app.get('/tpl*', routes.partials);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});