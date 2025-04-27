// This is a simple example of creating a Node.js server.
const http = require('http');
const url = 'http://localhost:3000';

http.createServer((req, res) => {
  // Respond with a JSON object containing the current time and a link to an image
  const currentTime = Date.now();
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write(`Time: ${currentTime}\nLink: https://www.example.com/image.jpg`);
}).listen(3000);
