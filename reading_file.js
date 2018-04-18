var fs = require("fs");

function findLength(str, recursive) {
    var length = str.length;

    for (var i = 0; i < str.length; i++) {
        //to expand the leftmost marker first
        if (str[i] !== '('){
            continue;
        }
        //substr(start, length) , since length not defined all the characters from start to the end
        // of the string are extracted.
        var match = str.substr(i).match(/^\((\d+)x(\d+)\)/);
        console.log(match);

        //parseInt function converts its second aray value since we have used match[1]
        // parseInt(string, radix), a radix of 10 indicates to convert to number
        var size = parseInt(match[1], 10);

        //similarly converts third array value since match[2]
        var times = parseInt(match[2], 10);

        //match[0] has tha matched regex value, this gives us the length of the regex
        var start = i + match[0].length;

        //to see which next string values have to passed again via recursion
        var newString = str.substr(start, size);
        //console.log(newString)

        //recursive method
        var newLength;
        if(recursive){
            newLength = findLength(newString, true);
        }
        else{
            newLength = newString.length;
        }
        //console.log(newLength);

        //Calculating the length
        length += newLength * times - match[0].length;
        length -= newString.length;

        //Setting the new value for i, for the next part of string
        i = start + newString.length - 1;
    }

    return length;
}

//var data = fs.readFileSync("input.txt").toString().trim();

console.log('Length:', findLength("X(3x4)abc", true));