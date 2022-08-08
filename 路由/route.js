const fs = require("fs");

const route = {
  "/login": (res) => render(200, res, "./static/login.html"),
  "/home": (res) => render(200, res, "./static/home.html"),
  "/404": (res) => render(404, res, "./static/404.html"),
};

function render(code, res, path) {
  res.writeHead(code, { "Content-Type": "text/html; charset=utf8" });
  res.write(fs.readFileSync(path), "utf-8");
}

module.exports = route;
