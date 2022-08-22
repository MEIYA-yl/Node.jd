const express = require("express");
const app = express();

const route = require("./router");

app.use(express.json()); // 配置 json 类型的表单请求体
app.use(express.urlencoded()); // 解析表单请求体：application/x-www-form-urlencoded

app.use("/todos", route); // 使用路由中间件

app.use((req, res, next) => {
  res.status(404).end("404 Not Found !");
}); // 处理不存在请求

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message,
  });
}); // 处理错误

app.listen(3001, () => {
  console.log(`Server running at htpp://lcalhost:3001`);
});
