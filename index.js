const http = require("http");
const port = 8000;
const server = http.createServer(requestHandler);

function requestHandler(req, res) {
  console.log(req.url);
  res.writeHead(200, { "Content-type": "text/html" });
  res.end("Hello World");
}

server.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Server is running on Port : ", port);
});
