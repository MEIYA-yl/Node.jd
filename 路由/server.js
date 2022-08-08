const http = require("http");
const Router = new Map();

function joint(origin) {
  Object.assign(Router, origin);
}

function server() {
  http
    .createServer(function (request, response) {
      const url = new URL(request.url, "http://127.0.0.1");
      try {
        Router[url.pathname](response);
      } catch {
        Router["/404"](response);
      }

      response.end();
    })
    .listen(3000);
}
exports.server = server;
exports.joint = joint;
