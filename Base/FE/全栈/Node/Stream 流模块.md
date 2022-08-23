---
tags: Stream 流模块 note
---

## Stream 流模块 基础语法：
在 Node.js 中流是一个对象，我们需要做的是响应流的事件。

**以流的方式读取文件内容：**

```js
const fs = require('fs')
const rs = fs.createReadStream('example.txt', 'utf-8'); // d读取文件内容 转换成一个流

// data 事件可能会有多次，每次传递的chunk是流的一部分，要以流的形式写入文件需要不断的调用write()方法，最后以end()结束。

rs.on('data', function(chunk){
	// data 事件表示流的数据可以被读取了
})
rs.on('end', function(){
	// end 事件表示这个流已经到了末尾，没有数据可以被读取了
})
rs.on('error', function(){
	// error 事件表示出现了错误
})
```

**以流的方式向目标文件中写入内容：**

```js
const fs = require('fs')
const ws = fs.createWriteStream('./example.txt', 'utf-8')

// 写入内容
ws.write('const obj = { name: 'zhangsan')
ws.write('age: 121,')
ws.write('hobby: [ "sing" ] }')

ws.end()
```

**<span style="color: red">Tip：</span>通过可写流进行大文件的复制**

```js
const fs = require('fs')

const rs = fs.createReadStream('./first.txt')
const ws = fs.createWriteStream('./second.text')

// 文件的复制就好像将两个水管连接起来，而文件从rs进入到ws的操作就是：pipe
rs.pipe(ws)
```