import * as m1 from "./module1.js";
import * as m2 from "./module2.js";
import * as m3 from "./module3.js";
import * as m4 from "./module4.js";
import $ from "jquery";

console.log("All模块", "使用babel打包");
console.log("m1模块：", m1);
console.log("m2模块：", m2);
console.log("m3模块：", m3);
console.log("m4模块：", m4);

console.log($);
$("body").css("backgroundColor", "#0033ff");
