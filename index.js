var express = require('express');
var app = express();

var port = 1337;

app.get('/', function(req, res) {
   res.send('Hello World');
});

app.listen(port, function(err) {
   console.log("Running service on port " + port);
});