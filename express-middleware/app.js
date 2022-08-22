const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
// 中间件在数组中声明为可重用
const logOrginalUrl = (req, res, next) => {
  console.log("Request URL: ", req.originalUrl);
  next();
};

const logMethod = (req, res, next) => {
  console.log("Request Type: ", req.method);
  next();
};

let logStuff = [logOrginalUrl, logMethod];
app.get("/user/:id", logStuff, (req, res, next) => {
  res.send("user info");
});

// next('route')
app.get(
  "/user/:id",
  function (req, res, next) {
    if (req.params.id === "0") next("route");
    else next();
  },
  function (req, res, next) {
    res.send("regular");
  }
);

app.get("/user/:id", function (req, res, next) {
  res.send("special");
});

app.listen(3000, () => {
  console.log("server runing at http://localhost:3000");
});
