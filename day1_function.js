function fact(number){
    if(number==0){
        return 1;
    }
    else{
        return number * fact(number-1);
    }
}

var data = 5;
console.log("Fact =", fact(data));