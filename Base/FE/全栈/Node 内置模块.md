---
tags: Node 内置模块 note
aliases：
progress: underway
---

## Node 内置模块 基础语法：

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

### URL 模块：
**parse 方法：** 将地址进行解析

```js
const url = require('url')
const urlString = 'https://baidu.com:443/ad/index.html?idxxx&name=xxx#tag=xxx'
const parsedStr = url.parse(urlString)
```

**format 方法：** 将被解析后的url对象恢复成url

```js
const url = require('url')

const urlObject = {

  protocol: "https:",

  slashes: true,

  auth: null,

  host: "www.baidu.com:443",

  port: "443",

  hostname: "www.baidu.com",

  hash: "#tag=10",

  search: "?id=8&name=mouse",

  query: { id: "8", name: "mouse" },

  pathname: "/ad/index.html?id=8&name=mose",

};

const parsedObj = url.format(urlObject);
```

**resolve 方法**

```js
const url = require('url')

var a = url.resolve("/a/b/c", "d"); // 第二个参数不加/ d将会替换c

var b = url.resolve("http://example.com/a", "/b"); // 域名之后的所有内容都将被第二个参数替换

var c = url.resolve("http://example.com/a", "b");
```

### queryString 模块：
**parse：** 针对html编码的解析语法，转换成对象格式

```js
const querystring = require('querystring')

const qs = 'x=3&y=4'
const parsed = querystring.parse(qs)
```

**stringify：** 将parse后的内容逆转
```js
const querystring = require('querystring')

const qo = {
	x: 3,
	y: 4
}
let parsed = querystring.stringify(qo)
```

**escape 和 unescape：** escape：用于在涉及到在数据库中特殊字符的转义，防止SQL的注入，导致参数出错。unescape：对escape结果逆转，进行解码。

```js
// escape
const querystring = require('querstring')

let str = 'id=3&city=beijing&url=http://baidumap.com'
let escaped = querystring.escape(str)

// unescape
const querystring = require('querystring')

let str = 'id%3D3%26city%3Dbeijing%26url%3Dhttp%3A%2F%2Fbaidumap.com'
let unescaped = querystring.unescape(str)
```