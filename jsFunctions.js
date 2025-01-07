//checking for same varibale in function with different valuves
var a=5;
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
console.log(a);
fun1();
fun2();
//output
// 5
// 10
// Tushar Rathod
// 12
// Tushar Rathod