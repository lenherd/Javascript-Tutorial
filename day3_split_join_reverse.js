/*********************************SPLIT & JOIN ************************************************************** */
/* TYPE 1
//str.split([separator, [limit]])....seperator is the symbol after whihc u want the string to split,
// limit gives the number of strings to be stored after spliting
var a = "Hello, i am lenherd, i am awesome";
// str.split(seperator)
var newString = a.split('am');
console.log(newString);
console.log("There are "+newString.length+" sentences in the newString array");
console.log("Now we replace them with **,** ");
console.log(newString.join('**,**')); 
*/

/* TYPE 2
//NOTE: If separator contains capturing parentheses i.e brackets the matched results are returned in the array.
eg: 
var myString = 'Hello 1 word. Sentence number 2.';
var splits = myString.split(/(\d)/);
console.log(splits);
//OUTPUT
[ "Hello ", "1", " word. Sentence number ", "2", "." ]
*/

/* TYPE 3
//Reversing a String using split()
var str = 'asdfghjkl';
var strReverse = str.split('').reverse().join(''); // 'lkjhgfdsa'
// split() returns an array on which reverse() and join() can be applied

*/

/*********************************SPLIT & JOIN ************************************************************** */

/*********************************REVERSE ****************************
 * ********************************** */
/* 
//str.reverse()...... can't reverse numbers and strings.. only arrays
//var a =[10,20,30];
var a =["hello","lenny","bye"]
b= a.reverse();
console.log(b); 
*/
/*********************************REVERSE ************************************************************** */

var readLine = require('readline');

function reverseDemo(word){
    
    var a = word.split('').reverse().join('');
    //console.log(a)
    return a;
}

var data= readLine.createInterface({

    input: process.stdin,
    output: process.stdout
});

data.question("",function(answer){
    console.log(reverseDemo(answer));
    data.close();
});