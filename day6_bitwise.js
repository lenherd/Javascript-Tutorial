function bitwiseDemo(n, k) {
    var count = 0;
    var largest = 0;
    for (var a = 1; a <= n - 1; a++) {
        for (var b = 2; b <= n; b++) {
            while (count > 0) {
                b++;
                count--;
            }
            //bitwise AND --> a&b
            if ((a & b) < k && (a & b) > largest) {
                largest = a & b;
            }
        }
        count = a;
    }
    console.log(largest);
}

var n = 8;
var k = 3;
bitwiseDemo(n, k);