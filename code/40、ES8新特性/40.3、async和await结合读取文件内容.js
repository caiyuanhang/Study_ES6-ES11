// 1、引入fs模块
const fs = require("fs");

// 2、封装读取文件内容的函数
function contentCha() {
  return new Promise((resolve, reject) => {
    fs.readFile("../resources/插秧诗.md", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

function contentGuan() {
  return new Promise((resolve, reject) => {
    fs.readFile("../resources/观书有感.md", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

function contentWei() {
  return new Promise((resolve, reject) => {
    fs.readFile("../resources/为学.md", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

// 3、通过async函数和await表达式拿到文件读取的内容
async function main() {
  try {
    const chayangshi = await contentCha();
    console.log(chayangshi.toString());

    const guanshuyougan = await contentGuan();
    console.log(guanshuyougan.toString());

    const weixue = await contentWei();
    console.log(weixue.toString());
  } catch (e) {
    console.log(e);
  }
}

main();
