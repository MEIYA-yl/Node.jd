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
