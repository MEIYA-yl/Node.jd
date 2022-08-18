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
	- **规范：**
		- 每个模块内部，module变量代表当前模块。
		- module 变量是一个对象，它的exprots属性（即： module.exprots）对外接口。
		- 加载某个模块，其实就是加载该模块的 module.exports 属性。require()方法用于加载模块。
	- 导出：
		- **module 对象：** 在使用 require()方法导入模块时，导入的结果**永远以module.exports 指向的对象为准**。
		- 在自定义的模块中默认情况下以 module.exports = { xxx } 的方式进行导出（module.exports.username = 'zhangsan'：可以向 module.exports 对象上挂载属性或方法） 或者 module.exports = xxx 或者
		- **exports 对象：** 为了简化导出时代码的复杂性，Node提供了exports 对象。**默认情况下，exprots 和 module.exprots 指向同一个对象。最终以 module.exprots 指向对象为准**  多次分别导出 exports.xxx = xxx；
	- 导入：require('./path') 
		- **模块在第一次加载后会被缓存。** 也就是说require()的多次引入不会导致模块代码的多次执行，他们都会优先从缓存中加载，从而**提高模块的加载效率。**
		- 内置模块是由Node.js官方提供的模块，**内置模块的加载优先级最高。**
		- **自定义模块** 在加载时，必须指定以`../ 或者 ./`开头的标识符。如果被加载的自定义模块没有指定，那么将会被node认为是内置模块或者三方模块进行加载。
	- 在导入时，如果省略了文件的扩展名，那么Node将会按照以下的方式进行文件的加载：
		1. 按照**确切的文件名**进行加载；
		2. 补全 **.js** 扩展名进行加载；
		3. 补全 **.json** 扩展名进行加载；
		4. 补全 **.node** 扩展名进行加载；
		5. 加载失败，终端会抛出文件不存在的错误；
1. 包管理、分发工具：
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


