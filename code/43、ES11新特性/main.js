const btn = document.querySelector("#btn");

btn.onclick = async function () {
  console.log("这个就是动态import了！");
  let res = await import("./m1.js");
  res.fun();
};
