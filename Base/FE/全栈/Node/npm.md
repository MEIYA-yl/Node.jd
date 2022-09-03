---
tags: npm 包管理器
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
	- npm install 包名 --save-dev (uninstall, update) dev-上线环境
	- npm list -g (不加-g，列举当前目录下的安装包)
	- npm info 包名（获取当前包版本详情）
	- npm info 包名 version （获取最新版本）
	- npm install md5@1 (安装指定版本)
	- npm outdated (检查包是否已经过时)

2. **开发一个npm包：** 初始化包的基本结构
	 -  新建包文件，文件命名以包名命名作为根目录
	 -  在包文件夹下，新建文件：package.json（包管理配置文件）、index.js（包的入口文件）、README.md（包文档说明）
	 -  初始化 package.json
	```js
		"name":"npm-package",
		"version":"1.0.0",
		"main":"index.js",
		"descripetion":"提供了····"，
		"keywords":['npm-package', 'lint', 'commit-lint'], // 搜索关键字
		"license":"ISC"
	```
	 - README.md 编写包的说明文档：
		 - 意义：它作为包得使用说明文档，方便用户做使用参考。
		 - 编写内容：安装方式、导入方式、包内所包含方法得使用语法介绍、开源协议等。
	- 包的发布：
		- 首先：需要在npm官网 `npm login` 进行登录npm个人账户的登录。
		- 其次：通过 `npm publish` 命令，将包发布到npm上。
	- 删除已发布的包：
		`npm unpublic 包名 --force` 命令，删除出已发布的包。
		- `npm unpublish` 命令删除 <style="color: red"> 72小时以内 </style>发布的包。
		- `npm unpublish` 删除的包，在24小时内不允许重复发布。