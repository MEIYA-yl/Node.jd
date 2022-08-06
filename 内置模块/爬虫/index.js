const https = require("https");
const http = require("http");
const url = require("url");

// 引入三方依赖
const cheerio = require("cheerio"); // 做数据爬取

http
  .createServer(function (request, response) {
    response.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
    });

    const urlObj = url.parse(request.url, true);

    switch (urlObj.pathname) {
      case "/api/meta": // 模拟客户端： 获取猫眼数据
        httpGet((data) => {
          response.end(spider(data));
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
    .get(`https://i.maoyan.com`, (res) => {
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        console.log(data);
        cb(data);
      });
    })
    .on("error", (e) => {
      console.error(e);
    });
}

function spider(data) {
  let $ = cheerio.load(data),
    $movieList = $(".column.content"),
    movies = [];

  $movieList.each((index, value) => {
    movies.push({
      title: $(value).find(".title").text(),
      grade: $(value).find(".grade").text(),
      actor: $(value).find(".actor").text(),
    });
  });

  console.log(movies);
  return JSON.stringify(movies);
}
