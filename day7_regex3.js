/*******************************************FLAGS IN REGEX*********************************************/
/* 
g
global match; find all matches rather than stopping after the first match

i
ignore case

m
multiline; treat beginning and end characters (^ and $) as working over multiple lines 
(i.e., match the beginning or end of each line (delimited by \n or \r), 
not only the very beginning or end of the whole input string)

u
unicode; treat pattern as a sequence of unicode code points

y
sticky; matches only from the index indicated by the lastIndex property of this
 regular expression in the target string (and does not attempt to match from any later indexes).

 Syntax
 /pattern/flags
 new RegExp(pattern, [flags])
 RegExp(pattern,[flags])
 */
/*******************************************FLAGS IN REGEX*********************************************/

var readLine = require('readline');

function regexDemo(word) {

    //the below code returns only one value
    //var regex = /\d+/
    //var result = word.match(regex);

    //hence we make use of flags
    //Note: We can match a string of one or more integers using the syntax \\d+.
    //var regex = new RegExp('\\d+', 'g');

    var regex =/\d+/g;
    var result = word.match(regex);
    //console.log(result);
    
    for(var i of result)
        console.log(i);
}

var data = readLine.createInterface({

    input: process.stdin,
    output: process.stdout
});

data.question("", function (answer) {
    regexDemo(answer);
    data.close();
});