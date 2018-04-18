/*
.	The period matches any single character, except line terminators (e.g., a newline).
\d	A single digit character (i.e., [0-9]).
\D	A single non-digit character (i.e., [^0-9]).
\w	A single alphanumeric word character, including the underscore (i.e., [A-Za-z0-9_]).
\W	A single non-word character (i.e., [^A-Za-z0-9_]).
\s	A single whitespace character. This includes space (), tab (\t), form feed, line feed, and other Unicode spaces.
\S	A single non-whitespace character (i.e., [^\w]).

We use the | symbol to match one thing or the other. For example, a|b matches either a or b.

^	Matches beginning of input. If the multiline flag is set to true, also matches immediately after a line break character.
$	Matches end of input. If the multiline flag is set to true, also matches immediately before a line break character.
\b	A zero-width word boundary, such as between a letter and a space.
\B	Matches a zero-width non-word boundary, such as between two letters or between two spaces.

a*: Matches the preceding item a, 0 or more times.
a+: Matches the preceding item a, 1 or more times.
a?: Matches the preceding item a, 0 or 1 time.
a{n}: Here n is a positive integer. Matches exactly n occurrences of the preceding item a.
a{n, }: Here n is a positive integer. Matches at least n occurrences of the preceding item a.
a{n, m}: Here n and m are positive integers. Matches at least n and at most m occurrences of the preceding item a. */

//Declaration

//Type 1 -A regular expression literal is a RegEx pattern encosed within forward slashes:
//const re = /ab+c/;

//Type -2 RegExp Objects, We can write a regular expression string and pass it as an argument to the RegExp constructor:
//const re = new RegExp('ab+c');

/**************************************METHODS*****************************************/
/* RegExp methods:

1.  test() method executes a search for a match between a regular expression and a specified string.
 Returns true or false.
Example:
var re = /^learn/;
var str1 = 'learn regular expressions';
var str2 = 'write regular expressions';

console.log(re.test(str1)); //true
console.log(re.test(str2)); //false

2. The exec() method executes a search for a match in a specified string. Returns a result array or null.
var re = /quick\s(brown).+?(jumps)/ig;
var str = 'The Quick Brown Fox Jumps Over The Lazy Dog.';
var res = re.exec(str);

console.log(res);

OUTPUT:
[ 'Quick Brown Fox Jumps',
'Brown',
'Jumps',
index: 4,
input: 'The Quick Brown Fox Jumps Over The Lazy Dog.' ]

//Note: whatever is written in the regex parenthesis is always stored in the array,here brown and jumps is stored

String methods:

1. The match() method retrieves the matches when matching a string against a regular expression
var re = /see (chapter \d+(\.\d)*)/i;
var str = 'For more information on regular expressions, see Chapter 3.4.5.1 and CHAPTER 2.3';

console.log(str.match(re));

OUTPUT:
[ 'see Chapter 3.4.5.1',
'Chapter 3.4.5.1',
'.1',
index: 45,
input: 'For more information on regular expressions, see Chapter 3.4.5.1 and CHAPTER 2.3' ]

2. search() method executes a search for a match between a regular expression and this String object. 
If successful, search() returns the index of the first match of the regular expression inside the string. Otherwise, it returns -1.

const re = /learn/;
const str1 = 'Today, we\'ll learn about regular expressions.';
const str2 = 'Tomorrow, we\'ll write regular expressions '
            + 'and learn some complex expressions.';
const str3 = 'We\'re all done now!';

console.log('returns', str1.search(re), '\n');
console.log('returns', str2.search(re), '\n');
console.log('returns', str3.search(re));

OUTOUT:
returns 13 
returns 46 
returns -1

3. split  - same as shown in day3_split_join_reverse.js

4.The replace(pattern, replacement) method returns a new string where some (or all) occurrences 
of a matched pattern have been replaced with a replacement substring.

const re = /RegExp/;
const myString = 'We\'re learning about RegExps.';
const replacementString = 'Regular Expression';

console.log(myString);
console.log(myString.replace(re, replacementString));

OUTPUT:
We're learning about RegExps.
We're learning about Regular Expressions. */

/**************************************METHODS****************************************/

var readLine = require('readline');

function regexDemo(word) {

    //used the | or symbol
    var regex = /^a\w*a$|^e\w*e$|^i\w*i$|^o\w*o$|^u\w*u$/;
    //var regex = new RegExp('^a\w*a|^e\w*e|^i\w*i|^o\w*o|^u\w*u');

    //OR \1$ checks that the last character matches the first captured charcter
   //var regex = /^(a|e|i|o|u).*\1$/;

    var result = regex.test(word);

    return result;
}

var data = readLine.createInterface({

    input: process.stdin,
    output: process.stdout
});

data.question("", function (answer) {
    console.log(regexDemo(answer));
    data.close();
});