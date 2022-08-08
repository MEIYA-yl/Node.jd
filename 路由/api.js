function render(res, data, type = "") {
  res.writeHead(200, {
    "Content-Type": `${type ? type : "application/json"}; charset=utf8`,
  });
  res.write(data);
}

const api = {
  "/api/user": (res) => {
    render(res, { name: "zhangsan", age: 23 });
  },
};

module.exports = api;
