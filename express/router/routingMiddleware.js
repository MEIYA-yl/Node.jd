const express = require("express");
const route = express.Router();

// 路由级中间件
route.get("/home", (req, res) => {
  res.send("home");
});

route.get("/login", (req, res) => {
  res.send("login");
});

module.exports = route;
