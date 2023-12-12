var fs = require("fs");
var data = "write file stream :GO IN 8 HOURS";
var obj = fs.createWriteStream("myfile.txt");

obj.write(data, "utf8");
obj.end();
obj.on("finish", function () {
  console.log("Finish writing; please check myfile.txt");
});

obj.on("error", function (e) {
  console.log(e.stack);
});

console.log("an example of a write stream");
