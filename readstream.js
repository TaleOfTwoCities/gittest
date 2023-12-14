var fs = require("fs");
var data = "read file stream : ";
var obj = fs.createReadStream("myfile.txt");

obj.setEncoding("utf8");

obj.on("data", function (datas) {
  data += datas;
});

obj.on("end", function () {
  console.log(data);
});

obj.on("error", function (e) {
  console.log(e.stack);
});

console.log("an example of a reading stream");
