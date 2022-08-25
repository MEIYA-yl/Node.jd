const express = require("express");
const tagsContorller = require("../controller/tags");
const router = express.Router();

// 返回列表标签
router.get("/", tagsContorller.getTags);

module.exports = router;
