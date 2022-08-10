const express = require("express");
const app = express();
const route = require("./router/routingMiddleware");

app.use(function ficker(req, res, next) {
  console.log("测试 应用级 中间件的使用 ~");
  next();
}); // 会致使 use 之后的请求去执行中间件
// app.use('/aabb', ficker) // 只在该路径下时，中间件才会被触发

app.use("/api", route); // 服务于路由中间件

app
  .get("/aa*bb", (req, res) => {
    // send 代替了write和end在原生种的命令
    res.send({
      name: "zhangsan",
      age: 23,
    });
  })
  .listen(3000);
