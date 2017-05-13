var http = require('http');

console.log("Running node app.");

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World woohoo!\n');
}).listen(8080);
