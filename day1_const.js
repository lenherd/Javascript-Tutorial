//declaring a constant value with a const keyword, and assigning it a value from math.PI
const PI = Math.PI;

function area(radius){
    return PI * radius * radius;
}

function perimeter(radius){
    return 2 * PI * radius; 
}

var radius = 2.6;

console.log("Area: ", area(radius));
console.log("Width: ", perimeter(radius));