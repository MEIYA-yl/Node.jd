const express = require("express");
const app = express();

const route = require("./router");

app.use(express.json()); // 配置 json 类型的表单请求体
app.use(express.urlencoded()); // 解析表单请求体：application/x-www-form-urlencoded

app.use("/todos", route); // 使用路由中间件

app.listen(3000, () => {
  console.log(`Server running at htpp://lcalhost:3000`);
});
