const mysql = require("mysql");
const db = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "my_first_sql",
});

db.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

// 查询表中数据
const data = "select * from  users";
db.query(data, (err, results) => {
  // 处理查询失败
  if (err) return console.log(err.message);
  // 返回查询成功的数据
  console.log("users 表数据：", results);
});

// 向表中插入数据
const insertUser = { username: "duanyu", password: "fd7a9a" };
// 待执行的sql语句，其中英文的?表示占位符
// const sqldata = "insert into users (username, password) values (?, ?)";
const sqldata = "insert into users set ?"; // 将新编辑的数据全部插入
// 使用数组的形式，依次为 ? 占位符指定具体的值
db.query(sqldata, insertUser, (err, results, fields) => {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log("数据已插入：", results, "------", fields);
  }
});

// 更新的数据对象
const updateUser = {
  id: 100001,
  username: "zhangwuji",
  password: "huiho8",
  city: "shenzhen",
};
// sql 语句
const sqlStr = "update users set ? where id = 7";
db.query(sqlStr, updateUser, (err, results) => {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log("数据已更新：", results);
  }
});

// 删除
const deleteSql = "delete from users where id = ?";

db.query(deleteSql, 100001, (err, results) => {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log("数据已删除：", results);
  }
});

// 标记删除
const markSql = "update users set status = 1 where id = ?";
db.query(markSql, 100040, (err, results) => {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log("执行标记删除 ~");
  }
});
