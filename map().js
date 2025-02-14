//map function syntax which is default
const radis_values=[2,3,4,5];
const area = function (radis_values){
    return Math.PI * radis_values*radis_values;
}
Array.prototype.calculates=function( logic){
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(logic(this[i]));
    }
    return result;
}
console.log(radis_values.calculates(area));


console.log(radis_values.map(area));

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
const user=[
    {firstname: "John",lastname: 'rase',age: 21},
    {firstname: "vijay",lastname: 'kumar',age: 23},
    {firstname: "jitesh",lastname: 'jakkey',age: 21},
    {firstname: "nikhil",lastname: 'mijik',age: 24}
]
// printing first and last names using map function 
const findings = user.map((x) => x.firstname+" "+x.lastname);
const count =user.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }else{
        acc[curr.age]=1;
    }
    return acc;
},{});

console.log(count);
console.log(findings);

const sort =user.filter((x) => x.age<23).map((x) => x.firstname);
console.log(sort);



const sort2 = user.reduce(function(acc,curr){
if(curr.age<23){
    // adding into emapty acc=[]; if curr.age<23 then adds in acc array 
    acc.push(curr.firstname);
}
return acc ;

},[]);
// here acc passing array 
console.log(sort2);