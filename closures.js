// Closures are created when:
// 1.	A function is defined inside another function.
// 2.	The inner function accesses variables from the outer function. // it is also called as lexical scope

function outerFunction() {
    let outerVariable = "I am from outer scope";
  
    function innerFunction() {
      console.log(outerVariable); // Accessing outerVariable
    }
  
    return innerFunction; // Returning the inner function
  }
  
  const closureFunction = outerFunction(); // outerFunction is executed
  console.log(closureFunction);//prints inner function
  closureFunction(); // "I am from outer scope"
  