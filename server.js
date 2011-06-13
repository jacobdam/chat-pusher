var http = require('http'),
    process = require('process');

var port = process.env.PORT || 4000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port, "0.0.0.0");
