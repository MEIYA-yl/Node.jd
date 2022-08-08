---
tags: Crypto 加密模块 note
aliases：
progress: underway
---

## Crypto 加密模块 基础语法：

**MD5 SHA1** 常见的转码方式，意义上算不上是一种加密，采用哈希的算法进行转码做签名标记的。

```js
// md5 的密码保护是通过本次对数据转码和数据库中所存储的十六进制码进行比对的一种保护方式。
const crypto = require("crypto");

const hash = crypto.createHash("md5"); // 在云开发中 经常更多的是使用 sha1 的方式进行转码的签名标记
hash.update("123456"); // update 方法可以被多次调用，默认字符串编码为 utf-8，也可以传入Buffer

console.log(hash.digest("hex")); // hex: 16进制  Base64
```

**HMAC** 同样也是一种哈希算法，可以利用MD5或SHA1（SHA256）等哈希算法，不同的是Hmac还需要有一个密钥（密钥会被存储在服务器上）。**只要密钥发生了变化，同样输入的数据也会得到不同的签名，因此可以将其理解为用随机数增强的哈希算法。**

```js
const crypto = require("crypto");

const hash = crypto.createHmac("sha256", "CDK");
hash.update("123456");

console.log(hash.digest("binary")); // 二进制
```

**AES 对称加密算法** 加密解密使用同一个密钥。crypto模块提供了AES支持，但需要手动封装函数，便于使用：

```js
const crypto = require("crypto");  

let data = "aes-cdk"; // 原始数据
let key = "abcdef1234567890"; // aes-128-cbc 这里选择了128位字节 相当于16位
let iv = "tbcdey1234567890"; // 密钥

function encrypt(key, iv, data) {
  let dep = crypto.createCipheriv("aes-128-cbc", key, iv);
  
  return (
    dep.update(data, "binary", "hex") + // update 处理数据，进行算法解析标记
    dep.final("hex") // final 表示结束
  );
} // 加密函数

function decrypt(key, iv, crypted) {
  let cryptedRes = Buffer.from(crypted, "hex").toString("binary");
  
  let dep = crypto.createDecipheriv("aes-128-cbc", key, iv);
  return dep.update(cryptedRes, "binary", "utf8") + dep.final("utf8");
} // 解密函数

let cryted = encrypt(key, iv, data);
console.log("加密结果-", cryted);

let decrypted = decrypt(key, iv, cryted);
console.log("解密结果-", decrypted);
```