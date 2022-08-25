const express = require("express");
const articleController = require("../controller/articles");
const router = express.Router();

// 获取文章列表
router.get("/", articleController.listtArticle);

// 获取用户创建的文章
router.get("/feed", articleController.feedArticle);

// 获取文章
router.get("/:slug", articleController.getArticle);

// 新建文章
router.post("/", articleController.createArticle);

// 更新文章
router.put("/:slug", articleController.updateArticle);

// 删除指定文章
router.delete("/:slug", articleController.deleteArticle);

// 向文章添加评论
router.post("/:slug/comments", articleController.addCommentsFromAnArticle);

// 获取文章中的评论内容
router.get("/:slug/comments", articleController.getCommentsFromAnArticle);

// 删除评论
router.delete("/:slug/comments/:id", articleController.deleteComment);

// 最受欢迎的文章
router.post("/:slug/favorite", articleController.favoriteArticle);

// 删除最消极的文章
router.delete("/:slug/favorite", articleController.unfavoriteArticle);

module.exports = router;
