const Server = require("./server");
const route = require("./route");
const apiRouter = require("./api");

// 注册路由
Server.joint(route);
Server.joint(apiRouter);

Server.server();
