---
tags: yarn note
aliases：
progress: underway
---

## yarn 使用基础：
- 和 npm 的对比：
	1. 速度相对较快：yarn 会缓存每个下载过的包，再次使用时无需下载。同时利用并行下载以最大化资源利用率，所以安装速度会更快。
	2. 安全：在代码的执行前，yarn 会通过算法校验每个安装包的完整性。
1. 项目的初始化：yarn init
2. 添加依赖包：
	- yarn add [package]
	- yarn add [package]@[version]
	- yarn add [package] --dev
3. 升级依赖包：
	- yarn upgrade [package]@[version]
4. 移除依赖包： yarn remove [package]
5. 安装项目的全部依赖：yarn install 