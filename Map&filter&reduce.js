//map()
const arr=[1,2,3,4,5]

function double(x){
    return x*2;
}
const output1 =arr.map(double);
console.log(output1);//[ 2, 4, 6, 8, 10 ]

function triple(x){
    return x*3;
}
const output2 =arr.map(triple);
console.log(output2);//[ 3, 6, 9, 12, 15 ]

function binary(x){
    return x.toString(2);
}

const output3 =arr.map(binary);
console.log(output3);//[ '1', '10', '11', '100', '101' ]

// map with arrow function
//when anyonoumus function is called and without retuning 
const output4 =arr.map((x)=>x*2);
console.log(output4);//[ 2, 4, 6, 8, 10 ]

// if we use arrow function withou returning but useing curly brackets (x)=>{x*2}
const output =arr.map((x)=>{x*2});
console.log(output);//[ undefined, undefined, undefined, undefined, undefined ]

//or
//when anyonumus function is called and with retuning the need to enclose with (X)=>{return aba}
const output5 =arr.map((x)=>{return x*2});
console.log(output5);//[ 2, 4, 6, 8, 10 ]


//filter()

const arr1 =[1,2,3,4,5];

function isEven(x){
    return x%2==0;
}
const output6 =arr1.filter(isEven);

console.log(output6);//[ 2, 4 ]

//filter with arrow function
const output7 =arr1.filter((x)=>x%2==0);
console.log(output7);//[ 2, 4 ]

function isODd(x){
    return x%2;//x%2!=0;
}
const output8 =arr1.filter(isODd);
console.log(output8);//[ 1, 3, 5 ]

const output9 = arr1.filter((x)=>x%2!=0)

console.log(output9)//[ 1, 3, 5 ]

const output10 = arr1.filter((x)=>x>3)
console.log(output10)//[ 4, 5 ]


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
