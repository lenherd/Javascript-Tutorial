/* 
//Classes in javascript

//TYPE -1 functional classes
1. Define a normal JavaScript function.
2. Create an object by using the new keyword.
3. Define properties and methods for a created object using the this keyword.

Eg:
function Fruit (type) {
    this.type = type;
    this.color = 'unknown';
    this.getInformation = getFruitInformation;
}

//OR
 
function Fruit (type) {
    this.type = type;
    this.color = 'unknown';
    this.getInformation = function() {
        return 'This ' + this.type + ' is ' + this.color + '.';
    }
} 


function getFruitInformation() {
    return 'This ' + this.type + ' is ' + this.color + '.';
}

let lime = new Fruit('Mexican lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());


//TYPE -2 using Object 
let lime = {
    type: 'Mexican lime',
    color: 'green',
    getInformation: function() {
        return 'This ' + this.type + ' is ' + this.color + '.';
    }
}

console.log(lime.getInformation());

lime.color = 'yellow';
console.log(lime.getInformation());

//TYPE-3 using class keyword
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

let p = new Polygon(1, 2);
console.log('Polygon p:', p);


// Constructor method
//The constructor method is a special method we use to create and initialize objects of a class.

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}

const square = new Polygon(10, 10);

console.log(square.getArea()); 
*/

class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    perimeter() {
        /*  var per = 0;
         for(var i of this.sides){
             per += i; 
         }
         return per; */

        //arr.reduce(callback, [initialValue])
        //callback is a Function to execute on each element in the array, taking four arguments:
        //Value to use as the first argument to the first call of the callback
        //addition is done passing 2-2 values
        //Example
        /*const array1 = [1, 2, 3, 4];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        
        // 1 + 2 + 3 + 4
        console.log(array1.reduce(reducer));
        // expected output: 10
        
        // 5 + 1 + 2 + 3 + 4
        console.log(array1.reduce(reducer, 5));
        // expected output: 15 */

        //see above example for understanding
        return this.sides.reduce(add);

        function add(a, b) {
            return a + b;
        }

    }
}


var rectangle = new Polygon([10, 20, 10, 20]);
var square = new Polygon([10, 10, 10, 10]);
var pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());