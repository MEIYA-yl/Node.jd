const express = require("express");
const route = express.Router();

const { getDb, saveDb } = require("./db");

route.get("/", async (req, res, next) => {
  try {
    const fileData = await getDb();
    fileData
      ? res.status(200).json(fileData.todos)
      : res.status(500).json({
          error: err.message,
        });
  } catch (err) {
    next(err);
  }
}); // 访问列表

route.get("/:id", async (req, res, next) => {
  try {
    const db = await getDb();
    const todo = db.todos.find((todo) => todo.id === req.params.id);
    todo
      ? res.status(200).json(todo)
      : res.status(404).end("error: not found!");
  } catch (err) {
    next(err);
  }
}); // 通过 id 查询

route.post("/", async (req, res, next) => {
  try {
    // 1. 获取客户端请求体参数
    let todo = req.body; // body 保存了用户请求的数据
    // 2. 进行数据验证
    if (!todo.title) {
      return res.status(422).json({
        // 422 数据丢失状态码
        error: "The field title is required.",
      });
    }
    // 3. 数据验证通过，存储数据
    const db = await getDb();
    const lastTodo = db.todos[db.todos.length - 1];
    todo.id = lastTodo ? "000" + (Number(lastTodo.id) + 1) : "0001";
    db.todos.push(todo);
    await saveDb(db);
    // 4. 发送响应
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
}); // 新增数据

route.patch("/:id", async (req, res, next) => {
  try {
    // 1. 获取数据修改目标数据
    const todo = req.body;
    // 2. 查找修改项
    const db = await getDb();
    const ret = db.todos.find((todo) => todo.id === req.params.id);
    if (!ret) return res.status(404).end();
    // 3. 合并修改数据
    Object.assign(ret, todo);
    // 4. 将数据保存
    await saveDb(db);

    res.status(200).json(ret);
  } catch (err) {
    next(err);
  }
}); // 修改数据

route.delete("/:id", async (req, res, next) => {
  try {
    // 获取数据
    const db = await getDb();
    // 查找数据
    const retIdx = db.todos.findIndex((todo) => todo.id === req.params.id);
    // 剔除
    if (retIdx === -1) res.status(404).end();

    retIdx === -1 && res.status(404).end();
    db.todos.splice(retIdx, 1);

    await saveDb(db);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}); // 删除数据

module.exports = route;
