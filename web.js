var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var out_str = fs.readFileSync('index.html','utf8').toString();

app.get('/', function(request, response) {
  response.send(out_str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
