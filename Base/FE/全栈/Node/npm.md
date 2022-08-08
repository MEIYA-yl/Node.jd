---
tags: npm note
aliases：
progress: underway
---

## npm 的使用：
- 前置知识：
	- g : 全局
	- "dependencies": { "md5": "^2.1.0" } ^ 表示如果直接使用 npm install 将会安装 MD5 2.x.x 的最新版本
	- ”dependencies“: { "md5": "~2.1.0" } ~ 表示如果直接使用 npm install 将会安装 MD5 2.1.x 的最新版本
	- ”dependencies“: { "md5": "*" } *表示如果直接使用 npm install 将会安装 MD5 的最新版本
1. 常用命令：
	- npm init
	- npm install 包名 -g  (uninstall, update)
	- npm install 包名 --save-dev (uninstall, update)
	- npm list -g (不加-g，列举当前目录下的安装包)
	- npm info 包名（获取当前包版本详情）
	- npm info 包名 version （获取最新版本）
	- npm install md5@1 (安装指定版本)
	- npm outdated (检查包是否已经过时)
