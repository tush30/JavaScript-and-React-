//reduce function
//finding sum of nummber

const array =[1,2,3,4,5,6,7,]//it is um of number is 28
function findsum(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum=sum + arr[i];
    }
    return sum;
}
console.log(findsum(array));//[ 1, 2, 3, 4, 5

//using reduce function with same out ut
const output11 = array.reduce(function(acc,curr){
    //    where accumulator is set to zero and current value is array iteration particular value and it return acc  
    acc=acc+curr
    return acc;
},0);
console.log(output11);//[ 1, 2, 3, 4, 5, 6, 7}


const user=[
    {firstname: "John",lastname: 'rase',age: 21},
    {firstname: "vijay",lastname: 'kumar',age: 23},
    {firstname: "jitesh",lastname: 'jakkey',age: 21},
    {firstname: "nikhil",lastname: 'mijik',age: 24}
]
// task1 is count the repeated age from the array
const count =user.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }else{
        acc[curr.age]=1;
    }
    return acc;
},{});

console.log(count);

const sort2 = user.reduce(function(acc,curr){
    if(curr.age<23){
        // adding into emapty acc=[]; if curr.age<23 then adds in acc array 
        acc.push(curr.firstname);
    }
    return acc ;
    
    },[]);
    // here acc passing array 
    console.log(sort2);