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
