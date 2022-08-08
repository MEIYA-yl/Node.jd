const express = require("express");
const app = express();

// app
//   .get("/", (req, res) => {
//     res.write("hello word!");

//     res.end();
//   })
//   .listen(3000);

app
  .get("/", (req, res) => {
    // send 代替了write和end在原生种的命令
    res.send({
      name: "zhangsan",
      age: 23,
    });
  })
  .listen(3000);
