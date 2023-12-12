var x = "Javascript";
var y = " In 8 hours";
var str = x + y;
console.log(str);

//Functions: a block of code that can be used repeatedly

function fun(str) {
  console.log(str);
}

fun("MySQL in 7 hrs");

//imbedded fns

function fun1(str) {
  console.log(str);
}
function fun2(myFun, str) {
  myFun(str);
}

fun2(fun1, "coding in node is fun");

//Anonymous function

function funk(myFunk, str) {
  myFunk(str);
}
funk(function (str) {
  console.log(str);
}, "code more,sleep more");

const { error } = require("console");
//call back function

// var fs = require("fs");

// console.log("This is a sample to rename a file");

// fs.rename("aaa.txt","bbb.txt",function(err){
//     if (err){
//         return console.error(err);
//     }
//     console.log("aaa.txt has renamed as bbb.txt successfully")
// });

//EVENTS
var events = require("events");

var eventobj = new events.EventEmitter();

eventobj.on("Event001", function () {
  console.log("Event001 done");
});

eventobj.on("Event002", function () {
  console.log("Event002 done");
});

eventobj.emit("Event001");
eventobj.emit("Event002");

//EventEmitter class

console.log("You can see the next message in 6 seconds:");

var EventEmitter = require("events");

var eventObject = new EventEmitter();

eventObject.on("DelayEvent", function () {
  console.log("The event delays by 6000 seconds");
});

setTimeout(function () {
  eventObject.emit("DelayEvent");
}, 6000);

////////////////////////////

var events = require("events");

var eventobjs = new events.EventEmitter();

var listener1 = function () {
  console.log("listener 1 run");
};

var listener2 = function () {
  console.log("listener 2 run");
};

eventobjs.addListener("myEvent", listener1);
eventobjs.addListener("myEvent", listener2);

eventobjs.emit("myEvent");

var number = eventobjs.listenerCount("myEvent");

console.log(number + " listeners run");

eventobjs.removeListener("myEvent", listener1);

console.log("listener1 has been removed");

number = eventobjs.listenerCount("myEvent");

console.log(number + " listeners run");

console.log("done");

//ERROR EVENT

// var obj = new events.EventEmitter()

// obj.emit('error');

//modules have been covered in another file
