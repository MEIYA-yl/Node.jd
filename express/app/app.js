var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views")); // 正确编译路径中的（反）斜杠
app.set("view engine", "ejs"); // 设置模板引擎为 ejs

app.use(logger("dev")); // 开发阶段使用：记录请求信息 页面的每一次刷新都会被打印在控制台
// 配置解析 Post 参数
app.use(express.json()); // json 格式
app.use(express.urlencoded({ extended: false })); // 路经中的字符串格式
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// 注册路由中间件
app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
