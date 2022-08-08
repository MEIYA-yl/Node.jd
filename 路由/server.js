const http = require("http");
const Router = {};

function joint(origin) {
  Object.assign(Router, origin);
}

function server() {
  console.log(Router);
  http
    .createServer(function (request, response) {
      const url = new URL(request.url, "http://127.0.0.1");
      try {
        Router[url.pathname](request, response);
      } catch {
        Router["/404"](request, response);
      }

      response.end();
    })
    .listen(3000);
}
exports.server = server;
exports.joint = joint;
