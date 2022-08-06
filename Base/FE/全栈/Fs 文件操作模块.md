---
tags: Fs.note
aliases：
progress: underway
---

## Fs 文件操作模块 基础语法：
**注意：** 以下 fs 模块方法是基于异步操作的，在嵌套使用时会出现意外的问题。
为解决上述问题 node 为以下方法设置了同步时的操作：xxxSync 意义以及使用方式与异步相同，**但是由于是同步进行的，在使用时需要手动的捕获错误避免出现进程堵塞导致的服务器卡死。所以绝大部分的需要在服务器运行期反复执行的业务逻辑的代码，必须使用异步方式。**

**导入fs模块：const fs = require('fs')**
- 创建文件夹：文件重复创建 错误状态码：EEXIST
	`fs.mkdir('./logs', (e) => { console.log('mkdir') })`

- 修改文件夹名称：当修改目标文件不存在 错误状态码：ENOENT
	`fs.rename('./logs', '.log', (e) => { console.log('rename') })`

- 删除文件：
	- 如果文件夹下只有一个文件，则无法删除 错误状态码：ENOTEMPTY
	- 当目录文件下不为空也不可删除
	`fs.rmdir('./log', (e) => { console.log('rmdir') })`
	- 不会被文件数目限制，只剩最后一个文件也可删除
	`fs.unlink('./logs/targetTxt.txt', (e) => { console.log('unlink') })`
	
- 编辑内容到文件中：会将文件中所有的内容都替换掉
	`fs.writeFile('./logs/targetTxt.txt', 'text !!!', (e) => { console.log('writeFile') })`

- 追加内容到目标文件：新内容不会覆盖已有内容
	`fs.appendFile('./logs/targetTxt.txt', 'next !!!', (e) => { console.log('appendFile') })`

- 读取目标文件中的内容：不指定返回类型时 data 返回的是一个buffer对象
	`fs.readFile('./logs/targetTxt.txt', utf-8, (e, data) => { console.log('read File') })`

- 读取目标文件目录：目标文件的目录会以数组的形式返回。
	`fs.readdir('./logs/targetTxt.txt', (e, data) => { console.log('readdir') })H`

- 展示目标文件的详细信息：以对象的形式返还目标文件的详情
	`fs.stat('./logs/targetTxt.txt', (e, data) => { console.log('stat') })`
	- data 中的两个方法：data.isFile() 目标是否为一个文件；data.isDirectory() 目标是否为一个目录

**Tip：删除文件包括其内部文件**

```js
const fs = require('fs').promises;  // 开启 promise 进行链式调用

// 方式 1 
fs.readdir('./logs').then( async (data) => {
	let ary = []
	// console.log(data)
	data.forEach( item => {
		ary.push( fs.unlink(`./logs/${item}`))
	})

	await Promise.all(ary) // all 等待所有异步全部执行之后
	await fs.rmdir('./logs')
})

// 方式 2
fs.readdir('./logs').then( async (data) => {
	let ary = []
	
	await Promise.all(data.map(item => fs.unlink(`./logs/${item}`))) 
	await fs.rmdir('./logs')
})
```

**最后补充：** 服务器启动时，如果需要读取配置文件或者结束时需要写入到状态文件时，可以使用同步方式。这些代码只在启动和结束时执行一次，不影响服务器得正常运行时得异步。