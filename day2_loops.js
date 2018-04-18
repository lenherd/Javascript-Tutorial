var readLine = require('readline');


function loopDemo(word){
    var vowels = ['a','e','i','o','u'];

    /*****************************CONCEPT************************/
    //for of loop in js... scans the entire array using i
    /* for(var i of vowels){
        console.log(i);
    } */


    //string.includes(searchvalue, start) .. return true if value is present.... the default start is 0
    /* var i = 'a'; 
    if(word.includes(i)){
        console.log("Word present");
    } */
    /*****************************CONCEPT************************/
    for(var i of word){
        if(vowels.includes(i)){
            console.log(i);
        }
    }

    //consonents
    for(var i of word){
        if(!vowels.includes(i)){
            console.log(i);
        }
    }

}

var data = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

data.question("",function(answer){
    loopDemo(answer);
    data.close();
});