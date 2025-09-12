var express = require('express');
var app = express();

app.get('/', function (req, res) {
  return res.end('Home Page');
});

app.get('/About', function (req, res) {
  return res.end('about Page');
});

app.listen(3000,()=>{
    console.log('Server is listening on http://localhost:3000/');
});