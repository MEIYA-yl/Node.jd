const express = require("express");
const route = express.Router();

// 路由级中间件
route.get("/home", (req, res) => {
  console.log("get", req.query);
  res.send("home");
});

route.post("/login", (req, res) => {
  console.log("post", req.body);
  res.send({
    code: "200",
    massage: "post request",
  });
}); // post 请求的响应依赖于中间件

module.exports = route;
