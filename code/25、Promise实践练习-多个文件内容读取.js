const fs = require("fs");

// 回调地狱
// fs.readFile("./resources/为学.md", (err1, data1) => {
//   fs.readFile("./resources/插秧诗.md", (err2, data2) => {
//     fs.readFile("./resources/观书有感.md", (err3, data3) => {
//       const str = `${data1}\r\n${data2}\r\n${data3}`;
//       console.log(str);
//     });
//   });
// });

// Promise链式调用
const p = new Promise((resolve, reject) => {
  fs.readFile("./resources/为学.md", (err1, data1) => {
    resolve(data1);
  });
});

p.then((res) => {
  return new Promise((resolve, reject) => {
    fs.readFile("./resources/插秧诗.md", (err1, data2) => {
      resolve([res, data2]);
    });
  });
})
  .then((res) => {
    return new Promise((resolve, reject) => {
      fs.readFile("./resources/观书有感.md", (err1, data3) => {
        res.push(data3);
        resolve(res);
      });
    });
  })
  .then((res) => {
    console.log("Promise链式调用：", res.join("\r\n"));
  });
