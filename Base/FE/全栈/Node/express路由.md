---
tags: express路由 note
aliases：
progress: underway
---

## express路由 基础语法：
1. 路由定义所采用的解构：`app.METHOD(path, handler)`。
	- app 是 express 上的一个实例
	- method 是 HTTP 上的方法
	- path 是请求地址
	- handler 作为函数执行的具体逻辑

2. `.send()` 代替了在node中最开始的 `write 以及 end` 方法：
```js
app
  .get("/", (req, res) => {
    // send 代替了write和end在原生种的命令
    res.send({
      name: "zhangsan",
      age: 23,
    });
  })
  .listen(3000);
```

3. 响应应用程序主页根路由上的post请求：
```javascript
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
```

4. 响应对 `/user` 路由的 put 请求：
```javascript
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
```

5. 响应对 `/user` 路由的 delete 请求：
```javascript
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
```

**路由指南：https://www.expressjs.com.cn/guide/routing.html**