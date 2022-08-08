function render(res, data, type = "") {
  res.writeHead(200, {
    "Content-Type": `${type ? type : "application/json"}; charset=utf8`,
  });
  res.write(data);
}

const apiRouter = {
  "/api/login": (req, res) => {
    //  get 请求
    const url = new URL(req.url, "http://127.0.0.1");
    console.log(url.searchParams);

    if (
      url.searchParams.get("userId") === "zhangsan" &&
      url.searchParams.get("password") === "asdasd"
    ) {
      render(res, `{ "code": 200 }`);
    } else {
      render(res, `{ "code": 404 }`);
    }
  },

  "/api/user": (req, res) => {
    // post
    var user = "";
    req.on("data", (chunk) => {
      // console.log(chunk)
      user += chunk;
    });

    req.on("end", () => {
      console.log(user);
      user = JSON.parse(user);
      if (user.userId === "zhangsan" && user.password === "123456") {
        render(res, `{ "code":200} `);
      } else {
        render(res, `{ "code":404} `);
      }
    });
  },
};

module.exports = apiRouter;
