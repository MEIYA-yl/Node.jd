var http = require("http");
var url = require("url");
var moduleRenderHTML = require("./module/renderHTML");
var moduleRenderStatus = require("./module/renderStatus");

var server = http.createServer(); //创建服务器

server.on("request", (req, res) => {
  //req 接受浏览器传的参数   res 返回渲染的内容
  if (req.url === "/favicon.ico") return; // todo
  // console.log(req.url); // 域名之后请求地址
  // console.log("----", url.parse(req.url)); // 解析地址

  var urlobj = url.parse(req.url, true); // 将 query 参数转化成 json
  // console.log(urlobj, urlobj.query.name, urlobj.query.age);

  var pathname = url.parse(req.url).pathname;
  res.writeHead(moduleRenderStatus.renderStatus(pathname), {
    "Content-Type": "text/html;charset=utf-8",
  });
  res.write(moduleRenderHTML.renderHTML(pathname));
  res.end();
});

server.listen(3000, () => {
  console.log("server start");
});
