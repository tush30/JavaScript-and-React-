
//trust issue with setTimeout
var x;
console.log(x);

setTimeout(function () {
    x=20;
    console.log(x);
},5000);
console.log("end");

let startdate = new Date().getTime();
let enddate = startdate;

//blocking main thread
while(enddate<startdate+10000) {

    enddate=new Date().getTime();
}
console.log("Are you sure you want");