'use strict';

// Import the interface to Tessel hardware
var tessel = require('tessel');

var app = require('./server');

app.listen(process.env.PORT || 8080, function () {
  console.log('Server running at http://192.168.1.101:8080/');
  // Blink!
  setInterval(function () {
    tessel.led[2].toggle();
  }, 2000);
});
