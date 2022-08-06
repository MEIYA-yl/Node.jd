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
        httpPost((data) => {
          response.end(data);
        });
        break;

      default:
        response.end("404");
    }
  })
  .listen(3000);

// console.log("Server running at http://127.0.0.1:3000/");

function httpPost(cb) {
  let data = "";

  const options = {
    hostname: "m.xiaomiyoupin.com",
    port: 443,
    path: "/mtop/market/search/placeHolder",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const req = https.request(options, (res) => {
    res.on("data", (chunk) => {
      data += chunk;
    }); // 监听data数据

    res.on("end", () => {
      cb(data);
    });
  });

  req.write(JSON.stringify([{}, { baseParam: { ypClient: 1 } }]));
  req.end();

  req.on("error", (e) => {
    console.error(e);
  });
}
