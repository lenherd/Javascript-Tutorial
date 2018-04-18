//normal 
//console.log("a\nb");

//template literal using the backtick ` symbol
//console.log(`a
//b`);

//A template literal can contain placeholders, which are preceded by a dollar sign ($) 
//and wrapped in curly braces ({}). 
//For example, in the template literal 
//`${expression}`, 
//the  text between the placeholders is passed to a function.

// Note : Template literal is extra work

/* 
//to sort easily
var a = [2,1,99,15,65];
console.log(a.sort()); 
*/

function expression(a,p){
    var x = p*p - 16*a;
    s1 = (p + Math.sqrt(x))/4;
    s2 = (p - Math.sqrt(x))/4;
    //console.log(s1);

    //to sort
    [s1, s2] = [s1, s2].sort();
    //console.log(s1);

    
}

var s1 = 10;
var s2 = 14;
var a = 140;
var p = 48;

expression(a,p)


