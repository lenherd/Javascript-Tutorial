var readLine = require('readline');

var data = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

data.question("", function (answer) {

    console.log();    
    console.log("Hello, World!");
    console.log(answer);


    data.close();
});
