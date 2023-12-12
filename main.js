//This section covers most about buffers..its methods and what not
//importing modules
// var obj = require('./modulefile')

// obj.myfunc()

// BUFFERS

//read from buffer
const obj = Buffer.from("RayYao");

console.log(obj.toString("ascii"));
console.log(obj.toString("hex"));
console.log(obj.toString("Base64"));

const buf = Buffer.allocUnsafe(6);
console.log(buf);
buf.fill(1); // fill function
console.log(buf);

//write to buffer
buff = Buffer.alloc(256);
len = buff.write("This buffer is huge");

console.log("The string length is " + len);

//read from buffer

buffs = Buffer.alloc(8);
buffs[0] = 104;
buffs[1] = 101;
buffs[2] = 108;
buffs[3] = 108;
buffs[4] = 111;
buffs[5] = 33;

console.log(buffs.toString("ascii"));
console.log(buffs.toString("ascii", 0, 6));
console.log(buffs.toString("utf8", 0, 6));
console.log(buffs.toString(undefined, 0, 6));

//buffer length

console.log("Buffer length: " + buf.length);

//buffer merge

var buf1 = Buffer.from("Kotlin ");
var buf2 = Buffer.from("in 8 Hours");
var buf3 = Buffer.concat([buf1, buf2]);
console.log("The buf3 is: " + buf3.toString());

//Buffer compare
var buffer1 = Buffer.from("100");
var buffer2 = Buffer.from("200");
var result = buffer1.compare(buffer2);
if (result < 0) {
  console.log(buffer1 + " is less than " + buffer2);
} else if (result == 0) {
  console.log(buffer1 + " is equal to " + buffer2);
} else {
  console.log(buffer1 + "is greater than " + buffer2);
}

//Buffer copy

var buffer3 = Buffer.from("java guide in 8 hrs");
var buffer4 = Buffer.from("Script");
buffer4.copy(buffer3, 4);
console.log(buffer3.toString());

//Buffer slice

var buffer5 = buffer3.slice(4, 16);
console.log("the content of buffer3 is " + buffer5.toString());

//More examples in modulefile.js
