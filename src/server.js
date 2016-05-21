'use strict';

var express = require('express');

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.status(200).sendFile('index.html', { root: __dirname });
});

module.exports = app;