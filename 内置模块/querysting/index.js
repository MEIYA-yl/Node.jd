const querystring = require("querystring");

let str = "id=3&city=beijing&url=http://baidumap.com";
let escaped = querystring.escape(str);
console.log(escaped);

let unescaped = querystring.unescape(escaped);
console.log(unescaped);
