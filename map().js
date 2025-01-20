//map function syntax which is default
Array.prototype.calculates=function( logic){
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(logic(this[i]));
    }
    return result;
}
console.log(radis_values.calculates(area));


console.log(radis_values.map(area));


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