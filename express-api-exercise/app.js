const express = require("express");
const app = express();
const morgan = require("morgan"); // 日志输出
const cors = require("cors"); // 为客户端提供跨域资源请求

const router = require("./router");
const errorHandler = require("./middleware/error-handler");
const PORT = process.env.PORT || 3300;

app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

// 挂载路由中间件
app.use("/api", router);
// 处理 404
app.use((req, res, next) => {
  res.status(404).end("404 Not Found!");
});
// 挂载错误中间件
app.use(errorHandler());

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
