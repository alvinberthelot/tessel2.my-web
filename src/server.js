'use strict';

var express = require('express');

var config = require('./config.json');

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.status(200).sendFile('index.html', { root: __dirname });
});

app.get('/api/microcontroller', function(req, res) {
  res.header('Content-Type', 'application/json');
  res.charset = 'utf-8';
  res.status(200).json({
    message: 'Give info about microcontroller used',
    data: {
      name: 'gaius'
    }
  });
});

module.exports = app;