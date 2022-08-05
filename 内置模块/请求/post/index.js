const http = require("http");
const url = require("url");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });

    const urlObj = request.pathname;

    switch (urlObj.pathname) {
      case value:
        break;

      default:
        break;
    }
    response.end("Hello World");
  })
  .listen(3000);

console.log("Server running at http://127.0.0.1:3000/");
