// No external dependencies required.
var http = require('http');

http.createServer(function(req, res) {
  if (req.url === '/') {
    res.writeHead(200);
    res.end("Hello, World!");
  }
}).listen(3000);
