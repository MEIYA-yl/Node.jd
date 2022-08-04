var http = require("http");
var url = require("url");
const { urlToHttpOptions } = require("url");
var moduleRenderHTML = require("./module/renderHTML");
var moduleRenderStatus = require("./module/renderStatus");

var server = http.createServer(); //创建服务器

server.on("request", (req, res) => {
  //req 接受浏览器传的参数   res 返回渲染的内容
  if (req.url === "/favicon.ico") return; // todo

  const myUrl = new URL(req.url, "http://127.0.0.1:3000"); // 这里代替了在旧的方法中的paser解析，同时等同于也就是相当于省去了reslove对url的拼接

  // console.log(myUrl.searchParams); // 获取当前 query 参数
  for (const [keys, items] of myUrl.searchParams) {
    console.log(keys, items);
    console.log(myUrl.searchParams.entries());
  }

  // url.fomat 可以自定义序列化的URL字符串表达。
  console.log(
    url.format(myUrl, { fragment: false, unicode: true, auth: false })
  );

  // urlToHttpOptions() 将url解析成一个option对象，同样类似于在旧版本中的paser解析后的url参数对象
  console.log(urlToHttpOptions(myUrl));

  var pathname = myUrl.pathname;
  res.writeHead(moduleRenderStatus.renderStatus(pathname), {
    "Content-Type": "text/html;charset=utf-8",
  });
  res.write(moduleRenderHTML.renderHTML(pathname));
  res.end();
});

server.listen(3000, () => {
  console.log("server start");
});
