var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.cookie("city", "beijing"); // res.cookie 设置cookie， req.cookie 读取
  res.send("respond with a resource");
});

module.exports = router;
