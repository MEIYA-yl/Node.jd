const express = require("express");
const router = express.Router();

// 用户注册
router.post("/users", function (req, res, next) {
  try {
    res.send("用户注册");
  } catch (err) {
    next();
  }
});

// 用户登录
router.post("/users/login", (req, res, next) => {
  try {
    res.send("用户登录");
  } catch (err) {
    next(err);
  }
});

// 获取当前用户信息
router.get("/user", function (req, res, next) {
  try {
    res.send("获取当前用户信息");
  } catch (err) {
    next(err);
  }
});

// 更新当前用户信息
router.put("/user", function (req, res, next) {
  try {
    res.send("更新当前用户信息");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
