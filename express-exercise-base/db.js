const fs = require("fs");
const { promisify } = require("util"); // 通过node内置的promise的方式 替换回调实现的异步数据获取
const path = require("path");

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const dbPath = path.join(__dirname, "./data-db.json");

exports.getDb = async () => {
  const data = await readFile(dbPath, "utf8");
  return JSON.parse(data);
}; // 将 json 对象， 转换成 js 代码

exports.saveDb = async (db) => {
  const data = JSON.stringify(db, null, "  ");
  await writeFile(dbPath, data);
};
