"use strict";

var _module = require("./module1.js");

var m1 = _interopRequireWildcard(_module);

var _module2 = require("./module2.js");

var m2 = _interopRequireWildcard(_module2);

var _module3 = require("./module3.js");

var m3 = _interopRequireWildcard(_module3);

var _module4 = require("./module4.js");

var m4 = _interopRequireWildcard(_module4);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log("All模块", "使用babel打包");
console.log("m1模块：", m1);
console.log("m2模块：", m2);
console.log("m3模块：", m3);
console.log("m4模块：", m4);

console.log(_jquery2.default);
(0, _jquery2.default)("body").css("backgroundColor", "#0033ff");