var  x  = "Javascript";
var y = " In 8 hours";
var str = x + y;
console.log(str);

//Functions: a block of code that can be used repeatedly

function fun(str){
    console.log(str);
}

fun("MySQL in 7 hrs");

//imbedded fns

function fun1(str){
    console.log(str);
}
function fun2(myFun,str){
    myFun(str);
}

fun2(fun1,"coding in node is fun");

//Anonymous function

function funk(myFunk,str) {
    myFunk(str);
    }
    funk( function(str){ console.log(str) }, "code more,sleep more" );  
    
    //call back function
    
var fs = require("fs");

console.log("This is a sample to rename a file");

fs.rename("aaa.txt","bbb.txt",function(err){
    if (err){
        return console.error(err);
    }
    console.log("aaa.txt has renamed as bbb.txt successfully")
});


//EVENT