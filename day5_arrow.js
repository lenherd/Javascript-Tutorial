/*************example of map function**********************************/
//var numbers = [1, 4, 9];
//var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
/*************example of map function**********************************/

/* 
var a = function(n){
    return n+n;
}

var b = [8,8,8,8];

//map() method creates a new array with the results of calling a 
//provided function on every element in the calling array.
var add = b.map(a);

console.log(add);
 */

 
//the entire above stuff can be replaced by arrow function, no need of {}, function, or return value
// the arrows => tells that it is a function
//helps in shortening the code
/**************************syntax is (parameter) => {statements}**********************************/
var a = n => n+n ;

var b = [8,8,8,8];
var add = b.map(a);
//even more short
//var add = b.map(n => n+n);
console.log(add);

//aditional example
var c = (a,b) => a*b;
var mul = b.reduce(c);
console.log(mul);
/**************************syntax is (parameter) => {statements}**********************************/

//FOR BETTER UNDERSTANDING SEE UR SUBMISIIONS IN HACKKERANK AND YOUR EXPLANATION IN THE DISCUSSION SECTION
// https://www.hackerrank.com/challenges/js10-arrows/problem