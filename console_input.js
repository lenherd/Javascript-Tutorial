//readLine helps in readling i/p  from console
var readLine = require('readline');


function work(number) {

    var sum = 0;
    number -= 1;

    //converting float to int values using parseInt
    var three = parseInt(number / 3, 10);
    var five = parseInt(number / 5, 10);

    while (three > 0) {
        sum += three * 3;
        three--;
    }
    while (five > 0) {
        sum += five * 5;
        five--;
    }

    return sum;
}


//to read data per line
var data = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

//data.questiom("enter i/p",function(something){})
data.question("", function (answer) {
    //method to call function
    console.log("size is:", work(answer));
    data.close();
});
//console.log("size is:",work(answer));