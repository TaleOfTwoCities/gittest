var fs = require("fs");

// var readstream = fs.createReadStream("infile.txt");

// var writestream = fs.createWriteStream("outfile.txt");

// readstream.pipe(writestream);

// console.log("An example of a pipe stream");
console.log("a sample for opening a file");

fs.open("myfile.txt", "r+", function (err) {
  if (err) {
    return console.error(err);
  } else console.log("The file has opened successfully");
});

//File status
fs.stat("myfile.txt", function (err, stats) {
  if (err) {
    return console.error(err);
  }
  console.log("The file information was retrieved successfully!");
  console.log("This item is a file? " + stats.isFile());
  console.log("This item is a directory ? " + stats.isDirectory());
});

//writeFileSync

fs.writeFileSync("syncfile.txt", "Gojo in 8 hours");
console.log("Write contents to a file successfully");
console.log("Please check syncfile.txt");

var data = fs.readFileSync("syncfile.txt");
console.log("contents of syncFile.txt");
console.log(data.toString());

//writeFile

fs.writeFile("asyncfile.txt", "R in 8 hours", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("write to a file successfully");
  console.log("please check asyncfile.txt");
});

fs.readFile("asyncfile.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("The contents of asyncfile.txt");
  console.log(data.toString());
});

var buf = new Buffer.alloc(1024);

fs.open("myfile.txt", "w+", function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("The file has opened successfully");

  fs.close(fd, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log("The file has closed successfully");
  });
});

//Delete files
// console.log("This is a sample for deleting files");
// fs.unlink("aaa.txt", function (err) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("The file has been deleted successfully");
// });

//HOUR 7
//creating directory

console.log(__dirname);

// fs.readdir("/Users/hp/myNode/newDir", function (err, files) {
//   if (err) {
//     return console.error(err);
//   }
//   files.forEach(function (file) {
//     console.log(file);
//   });
// });

// fs.rmdir("/Users/hp/myNode/newDir", function (err) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("The folder 'newDir' is removed successfully!");
// });

//UTIL

//callbackify...research more

var util = require("util");
async function mainFunction() {
  return "ruby in 8 hours";
}

const cbFunction = util.callbackify(mainFunction);

cbFunction((err, data) => {
  if (err) throw err;
  console.log(data);
});

//Inspect
function Books() {
  this.title = "Html";
  this.when = "in";
  this.number = "8";
  this.unit = "hours";
}
var obj = new Books();
console.log(util.inspect(obj));

//inherits

function Super() {
  this.value = "a + b";
  a = "Linux shell";
  b = " in 8 hours";
}

function sub() {
  this.value = a + b;
}

util.inherits(sub, Super);
var objsuper = new Super();
console.log(objsuper);

var objsub = new sub();
console.log(objsub);

//IsArray

var myArr = new Array();
var arr1 = util.isArray(myArr);
console.log(arr1);
var arr2 = util.isArray(myArr);
console.log(arr2);
var arr3 = util.isArray(myArr);
console.log(arr3);

//IsDate

var Data1 = util.isDate(new Date());
console.log(Data1);
var Data2 = util.isDate(Date());
console.log(Data2);
var Data3 = util.isDate("12/20/2023");
console.log(Data3);

//IsRegExp
var dat1 = util.isRegExp(/Rust In 8 hours/);
console.log(dat1);
var dat2 = util.isRegExp(new RegExp("string"));
console.log(dat2);
var dat3 = util.isRegExp(12 / 20 / 20203);
console.log(dat3);

//More in main.js
