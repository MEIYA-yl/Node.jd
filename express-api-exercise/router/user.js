const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

// 用户注册
router.post("/users", userController.register);

// 用户登录
router.post("/users/login", userController.login);

// 获取当前用户信息
router.get("/user", userController.getCurrenUser);

// 更新当前用户信息
router.put("/user", userController.updateCurrentUser);

module.exports = router;
