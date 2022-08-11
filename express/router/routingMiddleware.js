const express = require("express");
const route = express.Router();

// 路由级中间件
route.get("/", (req, res) => {
  console.log("get", req.query);
  res.send("路由中间件：get请求触发~");
});

route.get("/list", (req, res) => {
  res.send([1, 2, 3, 4, 5]);
});

route.post("/", (req, res) => {
  console.log("post", req.body);
  const { username, password } = req.body;
  if (username == "zhangsan" && password == "121212") {
    res.send({
      code: 200,
      massage: "post request",
    });
  } else {
    res.send({
      code: 500,
    });
  }
}); // post 请求的响应依赖于中间件

module.exports = route;
