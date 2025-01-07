//checking for same varibale in function with different valuves and execution context 

//here var n  veriable  will be set as undefined
console.log(n);
var n=5;

var a=5;
console.log(a);
//function can be call before the create function because  HOiSTING in execution context of js but veriable it will be set as undefined
fun1();
fun2();
function fun1(){
    var a=10;
    console.log(a);
    console.log("Tushar Rathod");
}
function fun2(){
    var a=12;
    console.log(a);
    console.log("Tushar Rathod");
}
//output
// undefined
// 5
// 10
// Tushar Rathod
// 12
// Tushar Rathod