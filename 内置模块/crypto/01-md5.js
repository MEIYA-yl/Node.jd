const crypto = require("crypto");

const hash = crypto.createHash("md5"); // 在云开发中 经常更多的是使用 sha1 的方式进行转码的签名标记
hash.update("123456"); // update 方法可以被多次调用，默认字符串编码为 utf-8，也可以传入Buffer

console.log(hash.digest("hex")); // hex: 16进制  Base64
