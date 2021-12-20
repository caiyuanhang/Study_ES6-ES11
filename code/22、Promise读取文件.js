const fs = require("fs");

// 原始的读取文件模块的方法
// fs.readFile("./resources/为学.md", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// 使用Promise这种方式
const p = new Promise((resolve, reject) => {
  fs.readFile("./resources/为学.md", (err, data) => {
    if (err) reject(err);
    resolve(data);
  });
});

p.then(
  (res) => {
    console.log(res.toString());
  },
  (err) => {
    console.log(err);
  }
);
