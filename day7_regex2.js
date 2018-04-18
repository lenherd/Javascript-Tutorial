var readLine = require('readline');

function regexDemo(word) {

    //the following regex dosn't work because  of .
    //var regex = /^(Mr.|Mrs.|Ms.|Dr.|Er.)\w+/;

    //the above string gives error for Er.Dr.
    //var regex = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)\w+/;

    var regex = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)\w+$/;
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