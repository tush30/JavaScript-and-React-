const radis_values=[2,3,4,5];

const area = function (radis_values){
    return Math.PI * radis_values*radis_values;
}
const circumference = function (radis_values){
    return 2* Math.PI * radis_values;
}

const calculate= function(radis_values, logic){
    let result = [];
    for (let i = 0; i < radis_values.length; i++) {
        result.push(logic(radis_values[i]));
    }
    return result;
}



console.log(calculate(radis_values, area));
//above is the calculate function whic similar to the map function
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

//for hiher order function invoking
console.log(calculate(radis_values,circumference));
// manual map function invok

console.log(radis_values.calculates(circumference));

//default map function invoking
console.log(radis_values.map(circumference));

//op
// [
//     12.566370614359172,
//     28.274333882308138,
//     50.26548245743669,
//     78.53981633974483
//   ]
//   [
//     12.566370614359172,
//     28.274333882308138,
//     50.26548245743669,
//     78.53981633974483
//   ]