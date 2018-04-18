var int = 12;
var float = 4.32;
var string = "is the best place to learn and practice coding!" ;

//firstInteger
var firstInt  = parseInt(float,10);
var firstAns = int+firstInt;
console.log(firstAns);

//firstDecimal
var firstDouble = float - firstInt;      //gives decimal value
var secondAns = firstDouble + firstInt * 2;
console.log(secondAns);

//firstString
console.log("HackerRank " + string);