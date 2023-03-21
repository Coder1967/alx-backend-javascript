const app = require('http');

const port = 1245;
const host = 'localhost';

app.createServer((req, res) => {
  res.writeHead(200);
  res.write('Hello Holberton School!');
  res.end();
}).listen(port, host);

module.exports = app;
