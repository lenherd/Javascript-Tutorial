function demoArray(){

    var a = [2, 3, 6, 6, 5];
    var largest = a[0];
    var secLargest = a[0];

    for(var i=0;i<a.length;i++){
        if(a[i]>largest){
            secLargest = largest;
            largest = a[i];
        }
        if(a[i]>secLargest && a[i]<largest){
            secLargest= a[i];
        }
    }
    console.log(secLargest);

    //Second method
  /*   //bubble sort
    for(var i=0;i<a.length-1;i++){
        for(var j=0;j<a.length-i-1;j++){
            if(a[j]>a[j+1]){
                var temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }

    var largest = a[a.length-1];
    var countLargest = 0;
    for(var i of a){
        if(largest == i){
            countLargest++;
        }
    }
    //console.log(countLargest);

    var secLargest = a[a.length-1-countLargest];
    console.log(secLargest); */


}

demoArray();