const http = require("http");

const requestListener = function (req, res) {
  res.writeHead(200);
  console.log("request receieved");
  res.end("Hello, World!");
};

const server = http.createServer(requestListener);
server.listen(8080);
