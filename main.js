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

const util = require("util");
async function functionname() {
  return "Taxed to death";
}
const cab = util.callbackify(functionname);
cab((err, data) => {
  if (err) throw err;
  console.log(data);
});
//Modules - Hour 8
//OS Module

var os = require("os");
console.log("The information of the current os is as follows");
console.log("The hostname name is: " + os.hostname());
console.log("The type of the operating system is : " + os.type());
console.log("The platform is: " + os.platform());
console.log("The total memory is: " + os.totalmem() + "bytes");
console.log("The free memory is: " + os.freemem() + "bytes");
console.log("The os version is :" + os.release() + "version");
console.log("The os runtime is :" + os.uptime() + "seconds");

//Path module

var path = require("path");
console.log("The result to process path are as follows:");
console.log("Join the path names:");
console.log(path.join("/app", "ban", "cat/egg", "myfolder"));

console.log("Search the first absolute path from left to right:");
console.log(path.resolve("/foo/bar", "/ray/baz"));

console.log("Make the first absolute path from left to right:");
console.log(path.resolve("/foo/bar", "baz"));

console.log("Check whether it is an absolute path:");
console.log(path.isAbsolute("/ray/baz"));

console.log("Convert to relative path:");
console.log(path.relative("/for/bar", "/ray/baz"));

console.log("Return the last folder:");
console.log(path.basename("/for/bar/myfolder"));

console.log("Return the extension name of a file:");
console.log(path.extname("/for/bar/myfolder/myfile.txt"));

console.log("Return the folder part, not include file:");
console.log(path.dirname("/for/bar/myfolder/myfile.txt"));

//DNS MODULE

// var dns = require("dns");
// dns.lookup("www.yahoo.com", function (err, address) {
//   console.log("The address for yahoo is", address);
//   if (err) {
//     console.log(err.stack);
//   }
// });

// dns.reverse("127.0.0.1", function (err, domain_name) {
//   if (err) {
//     console.log(err.stack);
//   }
//   console.log("The domain name for 127.0.0.1 is");
//   console.log(domain_name);
// });

//Domain module
var domain = require("domain");
const { EventEmitter } = require("stream");
var domain_obj = domain.create();
domain_obj.on("error", function (err) {
  console.log(err.message + "has been handled");
});

domain_obj.run(function () {
  var emit_obj = new EventEmitter();
  emit_obj.emit("error", new Error("The error "));
});

//Net Module
//creating server
var net = require("net");
var server = net.createServer(function (connection) {
  connection.write("Hello welcome to server!\r\n");
  console.log("The client has connected to the server");
});

server.listen("8080", function () {
  console.log("server is listening");
});

//creating client
var client = net.connect({ port: 8080 }, function () {
  console.log("connect to the server");
});
client.on("data", function (data) {
  console.log(data.toString());
});
