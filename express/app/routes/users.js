var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.cookie("city", "beijing"); // res.cookie 设置cookie， req.cookie 读取
  // res.statusCode = 201 node 原生的方式设置响应状态码
  res.status(201).send("respond with a resource");
});

module.exports = router;
