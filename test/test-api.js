'use strict';

var chai = require('chai');
 // we are using the "expect" style of Chai
var expect = chai.expect;
var superagent = require('superagent');

var config = require('../src/config.json');
var server = config.server;
var port = config.port;


describe('Basic routes', function() {

  it('GET /api/microcontroller : Give info about microcontroller used', function(done) {
    superagent.get('http://' + server + ':' + port + '/api/microcontroller')
    .end(function(e, res) {
      expect(res.status).to.eql(200);
      expect(res.body.data).to.eql({
        name: 'gaius'
      });
      done();
    });
  });

});