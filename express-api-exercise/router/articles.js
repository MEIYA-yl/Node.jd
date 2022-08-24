const express = require("express");
const router = express.Router();

// 获取文章列表
router.get("/", (req, res, next) => {
  try {
    res.send("获取文章列表");
  } catch (err) {
    next(err);
  }
});

// 获取用户创建的文章
router.get("/feed", (req, res, next) => {
  try {
    res.send("获取用户创建的文章");
  } catch (err) {
    next(err);
  }
});

// 获取文章
router.get("/:slug", (req, res, next) => {
  try {
    res.send("获取文章");
  } catch (err) {
    next(err);
  }
});

// 新建文章
router.post("/", (req, res, next) => {
  try {
    res.send("新建文章");
  } catch (err) {
    next(err);
  }
});

// 更新文章
router.put("/:slug", (req, res, next) => {
  try {
    res.send("更新文章");
  } catch (err) {
    next(err);
  }
});

// 删除指定文章
router.delete("/:slug", (req, res, next) => {
  try {
    res.send("删除指定文章");
  } catch (err) {
    next(err);
  }
});

// 向文章添加评论
router.post("/:slug/comments", (req, res, next) => {
  try {
    res.send("向文章添加评论");
  } catch (err) {
    next(err);
  }
});

// 获取文章中的评论内容
router.get("/:slug/comments", (req, res, next) => {
  try {
    res.send("获取文章中的评论内容");
  } catch (err) {
    next(err);
  }
});

// 删除评论
router.delete("/:slug/comments/:id", (req, res, next) => {
  try {
    res.send("删除评论");
  } catch (err) {
    next(err);
  }
});

// 最受欢迎的文章
router.post("/:slug/favorite", (req, res, next) => {
  try {
    res.send("最受欢迎的文章");
  } catch (err) {
    next(err);
  }
});

// 删除最消极的文章
router.delete("/:slug/favorite", (req, res, next) => {
  try {
    res.send("删除最消极的文章");
  } catch (err) {
    next(err);
  }
});
router.post("/:slug/favorite", (req, res, next) => {
  try {
    res.send("");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
