const express = require("express");
const app = express();
const morgan = require("morgan"); // 日志输出
const cors = require("cors"); // 为客户端提供跨域资源请求
const PORT = process.env.PORT || 3300;

app.use(morgan("dev")); // 三方中间件： 提供打印日志功能
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => res.send("Hello World!"));
app.post("/", function (req, res) {
  res.send("POST request to the homepage");
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
