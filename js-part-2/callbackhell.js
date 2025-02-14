//call back function is passinbg a function into another function as arguement

setTimeout(function()
 {console.log("hey");},5000);

// callback hell is means asyncrhronus function calling and passing function as arguement into a function and again calling function inside a function like nestedly calling

const cart =["a","b","c","d","e"];

createOrder(cart, function(orderId){

    orderSummary(orderId, function(paymentinfo){

        updatePayment(paymentinfo, function(){
                orderedMail();
        });
    });
});

// above sinppet is called callback hell whill leaseds a Inversion of control which maked deficult to debugging and loss of order of program control