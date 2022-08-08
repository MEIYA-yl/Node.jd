const Server = require("./server");
const route = require("./route");
const api = require("./api");

// 注册路由
Server.joint(route);
Server.joint(api);

Server.server();
