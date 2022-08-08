---
tags: Node.js
date: 2022-08-03 > 09:31
---
# Node.js


## Node 基础：
1. 认识nodejs:
	- Node是建立在js运行环境基础之上可以开发后端程序的一种后端语言。
	- Node的操作基于Chrome的V8引擎（只移植了v8内核），作者 **Ryan Dahl** 其搬运到服务器上，用于做服务器软件。
2. nodejs的特性:
	- 具有高并发的工作能力，可实现高性能服务器。
	- 开发周期短、开发成本低。
3. cjs 语法：
	- package.json 第一层配置项中通过 type 修改模块化语法规范：module es6规范、common cjs规范；
	- 导出：module.exports = xxx 或者 module.exports = { xxx }或则 多次分别导出 exports.xxx = xxx；
	- 导入：require('./path') 或者 
4. 包管理、分发工具：
	- [[npm]]
	- [[yarn]]

#### 内置模块目录：
- [[Node 内置模块]]
- [[Fs 文件操作模块]]
- [[Stream 流模块]]
- [[文件压缩]]
- [[Crypto 加密模块]]

#### Route 路由：

#### Node.js 周边：
- [[Express]] ：**基于Node.js平台，快速、开放、极简的 web 开发库。**


