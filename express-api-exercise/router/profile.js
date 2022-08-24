const express = require("express");
const router = express.Router();

// 获取用户资料
router.get("/", (req, res, next) => {
  try {
    res.send("获取用户资料");
  } catch (err) {
    next(err);
  }
});

// 关注用户
router.post("/follow", (req, res, next) => {
  try {
    res.send("关注用户");
  } catch (err) {
    next(err);
  }
});

// 取消用户关注
router.delete("/follow", (req, res, next) => {
  try {
    res.send("取消用户关注");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
