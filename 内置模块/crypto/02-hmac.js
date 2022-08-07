const crypto = require("crypto");

const hash = crypto.createHmac("sha256", "CDK");
hash.update("123456");

// console.log(hash.digest("hex"));
console.log(hash.digest("binary"));
// console.log(hash.digest("base64url"));
