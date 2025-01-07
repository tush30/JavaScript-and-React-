//function  Statement or function declearation
function a(){
    console.log("just a function");
} 
a();

// Function Expression  
var b = function a(){
    console.log("just a function expression");
} 
b();

c();
d();
//function  Statement or function declearation
function c(){
    console.log("just a function");
} 


// Function Expression  // diff btw function statement and expression is hoisting  var d is become type error because var d is undefined in first phase execution context
var d = function (){
    console.log("just a function expression");
} 
//op

// just a function
// just a function expression
// just a function
// c:\Users\tushr\OneDrive\Desktop\Js-react\JavaScript-and-React-\firstClassFunctions.js:14
// d();
// ^

// TypeError: d is not a function
//     at Object.<anonymous> (c:\Users\tushr\OneDrive\Desktop\Js-react\JavaScript-and-React-\firstClassFunctions.js:14:1)
//     at Module._compile (node:internal/modules/cjs/loader:1358:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
//     at Module.load (node:internal/modules/cjs/loader:1208:32)
//     at Module._load (node:internal/modules/cjs/loader:1024:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49

// anonymous function : is a function which is do not have function name which lead snytax error
function (){
    console.log("just a anonymous function");
}

//first class function:-> Ability used like values
//First class citizens