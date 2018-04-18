var readLine = require('readline');

function throwDemo(word) {
    try {
        if (word > 0)
            return 'YES';
        else if (word == 0)
            throw new Error("Zero Error");
        else
            throw new Error("Negative Error");
    }
    catch (e) {
        //see the diff between e and e.message
        return e.message;
    }
}

var data = readLine.createInterface({

    input: process.stdin,
    output: process.stdout
});

data.question("", function (answer) {
    console.log(throwDemo(answer));
    data.close();
});