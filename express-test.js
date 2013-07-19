var express = require('express');
var app = express(port = 8091);
var request = require('request');

app.listen(port);

app.get('/', function(req, res){
  res.send('Hello');
  console.log('get root');
});

app.get('/google', function(req, res){
  var response_page = request('http://www.google.com/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    res.send(body);
}})});

app.get('/wowza', function(req, res){
  var response_stream = request('http://localhost:8086/streammanager', function (error, response, body) {
    if(!error && response.statusCode == 200) {
      res.send(body);
    }
  }).auth('admin', 'syscim888', false);
  console.log('get stream');
});

console.log('visit: localhost:8091');