const path = require("path");

// 拼接路劲
const pathStr = path.join("./a", "./b/c", "../", "d");
console.log(pathStr); // a\b\d

const pathStr2 = path.join(__dirname, "./index.js");
console.log(pathStr2); // E:NOde.js\内置模块\path\index.js

// 获取路径中目的文件
const fpath = "/a/b/c/index.html";

const fullName = path.basename(fpath);
console.log(fullName); // index.html

const lastFile = path.basename(fpath, ".html");
console.log(lastFile); // index

// 获取路径扩展名
const fileExt = path.extname(fpath);
console.log(fileExt); // .html
