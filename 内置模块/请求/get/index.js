const https = require("https");
const http = require("http");
const url = require("url");

http
  .createServer(function (request, response) {
    response.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
    });

    const urlObj = url.parse(request.url, true);

    switch (urlObj.pathname) {
      case "/api/hot": // 模拟客户端： 获取猫眼数据
        httpGet((data) => {
          response.end(data);
        });
        break;

      default:
        response.end("404");
    }
  })
  .listen(3000);

// console.log("Server running at http://127.0.0.1:3000/");

function httpGet(cb) {
  let data = "";
  https
    .get(
      "https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%A4%A7%E5%90%8C&ci=129&channelId=4",
      (res) => {
        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          cb(data);
        });
      }
    )
    .on("error", (e) => {
      console.error(e);
    });
}
