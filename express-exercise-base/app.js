const express = require("express");
const app = express();
const { getDb, saveDb } = require("./db");

app.use(express.json()); // 配置 json 类型的表单请求体
app.use(express.urlencoded()); // 解析表单请求体：application/x-www-form-urlencoded

app.get("/todos", async (req, res) => {
  const fileData = await getDb();
  fileData
    ? res.status(200).json(fileData.todos)
    : res.status(500).json({
        error: err.message,
      });
}); // 访问列表

app.get("/todos/:id", async (req, res) => {
  const db = await getDb();
  const todo = db.todos.find((todo) => todo.id === req.params.id);
  todo ? res.status(200).json(todo) : res.status(404).end("error: not found!");
}); // 通过 id 查询

app.post("/todos", async (req, res) => {
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
    res.status(500).json({
      error: err.message,
    });
  }
}); // 新增数据

app.patch("/todos/:id", async (req, res) => {
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
    res.status(500).json({
      error: err.message,
    });
  }
}); // 修改数据

app.delete("/todos/:id", (req, res) => {
  res.send("delete/todos/:id");
});

app.listen(3000, () => {
  console.log(`Server running at htpp://lcalhost:3000`);
});
