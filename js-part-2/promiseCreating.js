const cart = ["Shoes","books","pant"]

const promise = createOrder(cart);

promise.then(function(orderId){
    console.log(orderId);
})
.then(function(){
    console.log("Order created");
})
//Error handling of reject
.catch(function(err){
    console.log(err.message);
})

function createOrder(cart){
    const pr = new Promise(function(resolve, reject) {
        //create order
        //validate cart
        //orderId

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
//validating cart
function validateOrder(cart){
    return true;
}