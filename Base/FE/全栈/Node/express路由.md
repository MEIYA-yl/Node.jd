---
tags: express路由 note
---

## express路由 基础语法：
> **express** 是一个自身功能极简,完全是由路由和中间件构成的一个web开发框架: 从本质上来说,一个express应用就是在调用各种中间件.
> **[[中间件]]** 是一个函数,它可以访问请求对象(request obj),响应对象(respond obj)
> ,和web应用中处于请求-响应循环流程中的中间件,一般命名为next的变量.

**Tip:**
	路由路径与请求方法结合，定义了可以进行请求的端点。路由路径可以是字符串，字符串模式或正则表达式。字符 `?, +, *, 和 ()` 是他们的正则表达式的对应的子集。连字符 `-` 和点 `.` 由基于字符串的路径按字面意义解释。如果您需要 `$` 在路径字符串中使用美元字符，请将其通过 `([])` 转义将内容并括在和中。例如，`/data/$book` 处于请求的路径字符串将为：`/data/([\$])book` .

**1. 路由定义所采用的解构：`app.METHOD(path, handler)`。**
	- app 是 express 上的一个实例
	- method 是 HTTP 上的方法
	- path 是请求地址
	- handler 作为函数执行的具体逻辑
- Tip：Express 使用 path-to-regexp 来匹配路由路径。

**2. `.send()` 代替了在node中最开始的 `write 以及 end` 方法：**
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

- 路由参数：路由参数是命名的 URL 段，用于捕获在 URL 中的位置指定的值。捕获的值填充到`req.params`对象中，路径中指定的路由参数的名称作为它们各自的键。
```js
{
	Route path: /users/:userId?books/:bookId
	Request URL: http;//localhost:3000/users/34/books/8989
	req.params: { 'userId': '34', 'bookId':'8989'}
}

// 使用路由参数定义路由，只需要在路由的路径中指定路由参数：
app.get('/users/:userId/books/:bookId', function(req, res){
	res.send(req.params)
})
```

- 中间件：提供多个回调函数，他们的行为作为中间件来处理请求。**回调可能需要调用next('route')来绕过剩余路由回调。**
```javascript
var cb0 = function (req, res, next) {
  console.log('CB0')
  
  const token = true
  // 对路由施加先决条件，然后如果没有理由继续当前路由，则将控制权传递给后续路由
  if(token){
	  next()
  } else {
	  new Error('token is invalid')
  }
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

var cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])
```


**3. 响应应用程序主页根路由上的post请求：**
```javascript
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
```

**4. 响应对 `/user` 路由的 put 请求：**
```javascript
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
```

**5. 响应对 `/user` 路由的 delete 请求：**
```javascript
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
```

**路由指南：https://www.expressjs.com.cn/guide/routing.html**