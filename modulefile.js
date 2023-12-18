exports.myfunc = function () {
  console.log("go in 8 hours");
};

var buf1 = Buffer.from("Kotlin");
var buf2 = Buffer.from("In 8 hours");
var buf3 = Buffer.concat([buf1, buf2]);
console.log("The buf3 says: " + buf3.toString());
//buffer compare
var buffer1 = Buffer.from("100");
var buffer2 = Buffer.from("200");
var result = buffer1.compare(buffer2);

if (result < 0) {
  console.log(buffer1 + "is less than " + buffer2);
} else if (result == 0) {
  console.log(buffer1 + "is equal to " + buffer2);
} else console.log(buffer1 + "is greater than " + buffer2);

//Buffer Index
const buf = Buffer.from("Linux guide in  8 hours");
console.log(buf.toString());
console.log("The index of guide is " + buf.indexOf("guide"));
console.log("The index of hours is " + buf.indexOf("hours"));
console.log(buf.length);

//Buffer equality

var buff = Buffer.from("abc");
var buff1 = Buffer.from("abc");
var buff2 = Buffer.from("abcdefghi");
console.log(buff.equals(buff1));
console.log(buff.equals(buff2));

//buffer ascii
console.log(buff2[3]);
console.log(buff2[6]);

//buffer to json
var json = buf.toJSON(buf);
console.log(json);

//read,write,pipe streams covered in separate files

//_filename

console.log(__filename);
console.log(__dirname);

//set time out

function delay() {
  console.log("Rust in 8 hours");
}

var t = setTimeout(delay, 3000);

clearTimeout(t);

console.log("The timer has been cleared out");

//SET INTERVAL
function interval() {
  console.log("Keep running until i press ctrl + c");
}

setInterval(interval, 3000);

//callbackify
//INSPECT
var util = require("util");
function Book() {
  this.title = "Html";
  this.when = "in";
  this.number = "8";
  this.unit = "Hours";
}

var obj = new Book();
console.log(util.inspect(obj));
