---
tags: Node 内置模块 note
aliases：
progress: underway
---

## Node 内置模块 基础语法：

### [[Fs 文件操作模块]]

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

### 跨域 ：
**jsonp** 特点：动态生成script标签、src指向没有跨域限制。

```js
const http = require('http')
const url = require('url')

const app = http.createServer((req, res) => {
	let urlObj = url.parse(req.url, ture)
	swich(urlObj.pathname){
		case '/api/user':
			res.end(`${urlObj.query.callback}`({"name": "gp123"}))	
			break
		default:
			res.end('404')
			break
	}
})

app.listen(3000, () => {
	console.log('localhost:8080')
})
```

**跨域：cros**

```js
// 通过配置请求头开启cors跨域：

res.writeHead( 200, {
	"Content-Type":"application/json;charset=utf-8", // 请求的内容类型
	// cors 头
	"access-control-allow-origin":"*"
})

```

### 请求 模块：
**get 请求**

```js
// 封装get请求
// get 请求第一个参数：请求地址 第二个参数：监听的数据（res 是一个对象，需要自己对数据进行监听，它是一个数据流在数据被返回时触发）

function httpGet(cb) {
  let data = "";
  https
    .get(
      "https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%A4%A7%E5%90%8C&ci=129&channelId=4",
      (res) => {
        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          cb(data); // 通过end将完整的数据进行处理
        });
      }
    ).on("error", (e) => {
      console.error(e);
    });

}

```

**post 请求**

```js
// 通过 https 上的request方法 来触发post请求， 使得浏览器get到接口返回来的数据

// 封装post请求， 
function httpPost(cb) {
  let data = "";
  const options = {
    hostname: "m.xiaomiyoupin.com",
    port: 443,
    path: "/mtop/market/search/placeHolder",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const req = https.request(options, (res) => {
    res.on("data", (chunk) => {
      data += chunk;
    }); // 监听data数据

    res.on("end", () => {
      cb(data); // 通过在创建的本地服务器的端口 将post到的数据返回
    });
  });

  req.write(JSON.stringify([{}, { baseParam: { ypClient: 1 } }]));
  req.end();
  
  req.on("error", (e) => {
    console.error(e);
  });

}
```

**爬虫** ：利用 cheerio 外部依赖帮助解析数据信息

```js
// 在使用上类似于 jq 语法：
// 这里需要注意的核心是：find 需要用到的数据

function spider(data) {
  let $ = cheerio.load(data),
    $movieList = $(".column.content"),
    movies = [];

  $movieList.each((index, value) => {
    movies.push({
      title: $(value).find(".title").text(),
      grade: $(value).find(".grade").text(),
      actor: $(value).find(".actor").text(),
    });
  });
  
  console.log(movies);
  return JSON.stringify(movies);
}
```

**Event** ：解耦

```js
// event 的使用在于对事件的监听和触发，在处理get/post异步请求参数处理的情况时，通过触发并在服务端进行返回的状态中进行监听触发的事件对象，同时将数据返回。

const { EventEmitter } = require("events")  
const http = require("http")  
const https = require("https")  
const url = require("url")  
  
var event = null  
http.createServer((req,res)=>{  
    var urlobj = url.parse(req.url,true)  
    // console.log(urlobj.query.callback)  
  
    res.writeHead(200,{  
        "Content-Type":"application/json;charset=utf-8",  
        //cors头，  
        "access-control-allow-origin":"*"  
    })  
  
    switch(urlobj.pathname){  
        case "/api/aaa":  
            // 客户端 去猫眼要数据  
            event = new EventEmitter()  // 这里之所以不在外部声明，是由于事件每一次的调用都会被缓存，导致出现递增性的调用。
            event.on("play",(data)=>{  
                console.log(11111)  
                res.end(data)  
            })  
            httpget()  
            break;  
        default :  
            res.end("404")  
    }  
}).listen(3000)  
  
  
function httpget(cb){  
    var data = ""  
    https.get(`https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4`,(res)=>{  
        res.on("data",(chunk)=>{  
            data+= chunk  
        })  
  
        res.on("end",()=>{  
            // cb(data)  
            event.emit("play",data)  
            // response.end(data)  
        })  
  
    })  
}
```