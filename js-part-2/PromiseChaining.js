const cart = ["Shoes","books","pant"]

const promise = createOrder(cart);

promise.then(function(orderId){
    console.log(orderId);
  
    return orderId;//this is return to next to its promise into a function parameter
})
.catch(function(err){
    console.log(err.message);
}) //here is catch the error for its above promise after handeling then control goes to next promise
.then(function(orderId){
    return processPyamentOrder(orderId); //this is return to next to its promise into a function parameter
})
.then(function(paymentinformation){
    console.log(paymentinformation);
})
//Error handling of reject
.catch(function(err){
    console.log(err.message);
})
.then(function(orderId){
    console.log("no matter what it will definitely be called");
    console.log(promise);
})


function createOrder(cart){
    const pr = new Promise(function(resolve, reject) {
        //create order
        //validate cart
        //orderId
        //in the formise resolve and reject is used for one time only for one promise.
        if (!validateOrder(cart)){
            
            const err= new Error("Invalid cart");
            reject(err);
        }
        //logic for order creation
        const orderId="1234";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000);
            
        }

    });
    return pr;
}
//payment info
function processPyamentOrder(ObjectId){
    return new Promise(function(resolve,reject){
        resolve("Payment successfully done")
    })
}
//validating cart
function validateOrder(cart){
    return true;
}