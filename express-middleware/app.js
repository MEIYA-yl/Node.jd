const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
// 中间件在数组中声明为可重用
const logOrginalUrl = (req, res, next) => {
  console.log("Request URL: ", req.originalUrl);
  if (req.params.id === "0") next("route"); // next('route')
  else next();
};

const logMethod = (req, res, next) => {
  console.log("Request Type: ", req.method);
  next();
};

let logStuff = [logOrginalUrl, logMethod];
app.get("/user/:id", logStuff, (req, res, next) => {
  res.send("user info");
});

app.get("/user/:id", function (req, res, next) {
  try {
    res.send("special");
  } catch (err) {
    next(err); // 将err通过next()传递给 错误中间件
  }
});

app.use((req, res, next) => {
  res.status(404).end("404 Not Found !");
});

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message,
  });
}); // 错误中间件

app.listen(3000, () => {
  console.log("server runing at http://localhost:3000");
});
