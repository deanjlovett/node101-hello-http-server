// write your code here
var http = require("http");

const hostname = '127.0.0.1';
const port = 8080;
const statusCode = 200;

const server = http.createServer ((req, res) => {
    res.writeHead(statusCode, {"content-type":"text/plain"});
    res.end("Hello World");
});

server.listen(port, hostname,() => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
