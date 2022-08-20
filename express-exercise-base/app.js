const express = require("express");
const app = express();
const fs = require("fs");

const { getDb } = require("./db");

app.use(express.json()); // 配置 json 类型的表单请求体

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

app.post("/todos", (req, res) => {
  console.log(req.body);
  res.send("post/todos");
});

app.patch("/todos/:id", (req, res) => {
  res.send("patch/todos/:id");
});

app.delete("/todos/:id", (req, res) => {
  res.send("delete/todos/:id");
});

app.listen(3000, () => {
  console.log(`Server running at htpp://lcalhost:3000`);
});
