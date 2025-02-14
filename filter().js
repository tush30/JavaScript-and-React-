/filter()

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
