const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end('<!doctype html><html lang="en"><meta charset="utf-8"><title>CE2000 Server</title><h1>Hello World!</h1></html>');
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});
