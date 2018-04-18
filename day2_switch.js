function switchDemo(word) {
    var first = word[0];

    switch (first) {
        case 'a' || 'e' || 'i' || 'o' || 'u':
            first = 'A';
            break;

        case 'b' || 'c' || 'd' || 'f' || 'g':
            first = 'B';
            break;

        case 'h' || 'j' || 'k' || 'l' || 'm':
            first = 'C';
            break;

        default:
            first = 'D';
            break;
    }
    return first;

}

var data = "adfgt";
console.log(switchDemo(data));