const express = require("express");
const profileController = require("../controller/profile");
const router = express.Router();

// 获取用户资料
router.get("/", profileController.getProfile);

// 关注用户
router.post("/follow", profileController.followUser);

// 取消用户关注
router.delete("/follow", profileController.unfollowUser);

module.exports = router;
