const express = require("express");
const router = express.Router();

// 返回列表标签
router.get("/", (req, res, next) => {
  try {
    res.send("返回列表标签");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
