//this an example of tthe callback hell which leads to inversion of control and loss of control deficulty in understanding and debuging
// soloution for this promise to use 
const cart =["a","b","c","d","e"];

createOrder(cart, function(orderId){

    orderSummary(orderId, function(paymentinfo){

        updatePayment(paymentinfo, function(){
                orderedMail();
        });
    });
});

//example of promise chain
const promise = ctrateOrder(cart);

promise.then(function(odrerid){
    return orderSummary(orderId);
})
.then(function(paymentinfo){
    return updatePayment(paymentinfo);
})
.then(function(){
    return ordermail();
});