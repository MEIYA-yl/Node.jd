---
tags: SQL note
aliases：
progress: underway
---

## SQL :
1. **什么是 sql ？**
	SQL（Structured Query Language）是结构化查询语言，专门用来访问和处理数据库的编程语言。能够让我们以编程的形式操作数据库中的数据。
	- SQL 是一门数据库语言，所编写的代码叫SQL语句。
	- SQL语言只能在关系型数据库中使用（Mysql、Oracle、SQL Server），非关系型数据库（MongoDB）不支持。

2. **sql 能做什么？**
	- 对数据库中的数据进行：增删改查
	- 创建新数据库、表
	- 创建存储过程、视图
	- etc ...

3. **sql 基础语法：**
	- 查询数据（select）、插入数据（insert into）、更新数据（update）、删除数据（delete）
	- where 条件、and 和 or 运算符、order by 排序、count(*)  

4. **语法：**
- SELECT 语句用于从表中查询数据，执行的结果被存储在一个结果表中（称为结果集）。 **sql 中对关键字的大小写不敏感。**
```sql
-- 从 FROM 指定的表中，查询出所有数据。 * 表示所有列  
-- 语法：SELECT * FROM  表名  
select * from users  
  
-- 从 FROM 指定的表中，查询指定 列名称（字段）的数据  
-- 语法：SELECT 列名称 FROM 表名  
select username, password from users
```

- INSERT INTO 语句向数据表中插入新的数据行：
```sql
-- 向指定表中插入指定列数据，列值可以通过values指定
-- 列和值要一一对应，多个列和值之间，使用引文的逗号分隔

INSERT INTO `my_first_sql`.users(id, username, password, status, city) values (100011,'lisi','123123',0,'beijing');
```

- Update 语句用于修改表中的数据：
```sql
-- update 用于指定更新某表中的数据
-- set　用于指定列对应的新值
-- where 指定更新条件

-- 语法：update 表名称 set 列名称 = 新值 where 列名称 = 某值
update users set password = 'add123', city = 'new york' where id = 100011
```

- DELETE 语句用于删除表中的行：
```sql
-- 从指定的表中 根据where 条件删除对应的数据行
-- 语法：delete from 表名称 where 列名称=值
delete from users where id = 100013
```

- 运算符：
	- 操作符 : 描述
		1. = ( != ) : 等于(不等于)
		2. `>` (<) : 大于（小于）以及大小等于
		3. between ：在某个范围内
		4. like ：搜索某种模式

- where 子句：用于限定选择的标准。在select、update、delete语句中，皆可使用where子句来限定选择的标准。
```sql
-- 语法：查询语句中的 where 条件
	select 列名称 from 表名称 where 列 运算符 值
	
	select *  
	from users where username='lisi';
-- 语法：更新语句中的 where 条件
	update 表名称 set 列=新值 where 列 运算符 值

	update users set status = 1 where id > 100011
-- 语法：删除语句中的 where 列 运算符 值
	delete from 表名称 where 列 运算符 值

	delete  
	from users  
	where username = 'test';
```

- sql 的 AND 和 OR 运算符
1. 语法：
	and 和 or 可在where子语句中把两个或多个条件结合起来。
	and 和 必须同时满足多个条件，相当于JavaScript中的&&运算符，例如：`if(a !== 10 && a !== 20)`
	or 表示只要满足任意一个条件即可，相当于JavaScript中的||运算符，例如：`if(a !== 10 || a !== 20)`

2. 运算符示例：
	- 使用and来显示所有status为0，并且id小于范围的用户：`select * from users where status = 0 and id < 100011`
	- 使用or来显示所有status为1，或者username为 'zhangsan' 的用户：`select  * from users where  status = 1 or username = 'zhangsan'`

- order by 子句：
1. 语法：
	order by 语句用于根据指定的列对结果集进行排序
	order by 语句默认按照升序对记录进行排序
	**如果需要按照’降序‘对记录进行排序，可以使用desc关键字**
2. 运算符示例：
	- 排序：`select * from users order by id desc`（降序-逆序）
	- 多重排序：`select * from users order by password desc, city asc`

- sql 的 count(*)函数：用于返回查询结果的总数据条数，语法格式如下：
```sql
-- 语法：select count(*) from 表名称
select count(*)  
from users u  
where u.city = 'beijing';
```

- 使用 as 关键字给列起别名
```sql
select count(*) as c  
from users u  
where u.city = 'beijing';

-- 或者
select  username as uname, city as c from users
```

## 在项目中使用 SQL：
1. 安装 mysql 模块：
	mysql 模块是托管于 npm 上的三方模块。它提供了在node.js项目中的链接和操作MySQL数据库的能力。我们可以将mysql安装为项目的依赖包：`npm i mysql` 。

2. 配置musql模块：对模块进行配置。
```js
// 1. 导入mysql 模块
const mysql = require('mysql')

// 2. 建立与MySQL数据库的连接
const db = mysql.createPool({
	host: '127.0.0.1', // 数据库的 IP 地址
	user: 'root', // 登录数据的账号
	assword: 'admin123', // 登录数据库的密码
	database: 'my_first_sql' // 指定要操作的数据库
})
```

3. 测试 mysql 是否可以正常工作：调用db.query()函数，指定执行的sql语句，通过回调函数拿到执行的结果：
```js
db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {

  if (error) throw error;

  console.log('The solution is: ', results[0].solution);

});
```

4. 查询数据：查询 users  表中所有的数据
```js
db.query('select * from users', (err, results) => {
	// 处理查询失败
	if(err) return console.log(err.message)
	// 返回查询成功的数据
	console.log(results)
})
```

5. 插入数据：向users表中新增数据，其中username为Spider-Man，password为jklh12，如下：
```js
// 插入的数据
const user = { username: 'Spiderman', password: 'jklh12'}
// 待执行的sql语句，其中英文的?表示占位符
const data = 'insert into users (username, password) values (?, ?)'
// 使用数组的形式，依次为 ? 占位符指定具体的值
db.query(data, [user.username, user.password], (err, results) => {
	if (err) return console.log(err.message)
	if (results.affectedRows === 1) { console.log('数据已插入：') }
})
```

6.更新数据：
```js
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
```

7. 删除数据：在删除数据时，推荐根据id这样的唯一标识来删除对应的数据。
```js
// sql 语句
const deleteSql = "delete from users where id = ?";
// 如果：sql语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
// 如果：sql语句中只有一个占位符，则可以省略数组
db.query(deleteSql, 100001, (err, results) => {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) { // affectedRows 影响行数
    console.log("数据已删除：", results);
  }
});
```

8. 标记删除：
	使用delete语句，会把真正的数据从数据表中删除。为了数据的安全性，推荐使用标记删除的形式，来模拟删除的动作，所谓的标记删除，就是再表中设置类似于status这样的字段，来标记这条数据是否被删除。
	当用户执行了删除的动作时，我们并没有执行delete语句把数据删除掉，而是执行了update语句，将这条数据对应的status字段标记为删除即可。
```js
// 标记删除：使用update语句代替delete语句；只更新数据的状态，并没有真正的删除
db.query()
```