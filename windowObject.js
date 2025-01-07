//it is global space window object which is attached to window object
// global space window object is such object which is crated out of the any function in which global space.
var a=10;

function fun(){
    //local varibale which is function
    var a=10;
}
// it not execute in vs because window object is for browser for vs code it has different name like window.
console.log(window.a);
//error
// console.log(window.a);
//             ^

// ReferenceError: window is not defined
console.log(a);
console.log(this.a); //in browser it give out 10  beacuse (this === window)
//op
// 10
// undefined
