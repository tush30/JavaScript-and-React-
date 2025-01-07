var a= 200;
function shadow(){
 
    var a= 20;// Shadows the outer
    console.log(a);//20
}
shadow();
console.log(a);

let name = "Tushar";

function greet() {
  let name = "Rathod"; // Shadows the outer name
  console.log("Hello, " + name); // Hello, Rathod
}

greet();
console.log("Goodbye, " + name); // Goodbye, Tushar

var b = 10;

if (true) {
  let b = 20; // Allowed because it's block-scoped
  console.log(b); // 20 (inner b)
}

console.log(b); // 10 (outer b)

