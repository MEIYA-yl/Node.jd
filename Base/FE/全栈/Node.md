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

## Node 内置模块：

### HTTP模块：
**使用http服务器和客户端，必须require('http'):**

```js
// 示例一：

const http = require('http')

// 创建本地服务器来从其接受数据
const server = http.createServer((req, res) => {
	// 接受浏览器传的参数 返回渲染的内容
	res.writeHead(200, { 'Conten-Type': 'application/json'}); // 配置响应头
	res.end(JSON.stringify({
		data: 'Hello World'
	}))
}) 

server.listen(8000)
```

```js
// 示例二：

const http = require("http")

// 创建本地服务器来从其接收数据
const server = http.createServer()

// 监听请求事件
server.on('require', (req, res) => {
	// 接受浏览器传的参数 返回渲染的内容
	res.writeHead(200, { 'Conten-Type': 'application/json'}); // 配置响应头
	res.end(JSON.stringify({
		data: 'Hello World'
	}))
})

server.listen(8000)
```