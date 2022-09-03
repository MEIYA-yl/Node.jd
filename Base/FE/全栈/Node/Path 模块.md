---
tags: Path node
---

## Path 模块 基础语法：
**path** https://nodejs.org/dist/latest-v16.x/docs/api/path.html **模块**：是Node.js官方提供的、用来处理路劲的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求。

1. **path 模块的使用：** `const path = require('path')`

- path.join() 方法：用来将多个路劲片段拼接成一个完整的路径字符串
	1. 语法格式：`path.join([...paths])` 
	- `...paths <string>` 路径片段的序列
	- 返回值：`<string>`
- path.basename() 方法：用来从路径字符串中，将文件名解析出来
	1. 语法格式：`path.basename(path[, ext])` 可以获取路径中的最后一部分，通常通过该方法获取路劲中文件。
	- `path<string>` 必选参数，表示一个路径的字符串
	- `ext<stirng>` 可选参数，表示文件扩展名
	- 返回：`<string>` 表示路径中的最后一部分 
- path.extname() 方法：获取路径中的扩展名部分：
	1. 语法格式：`path.extname(path)`
	- `path<string>` 必选参数，表示一个路径的字符串
	- 返回：`<string>` 返回得到扩展名字符串