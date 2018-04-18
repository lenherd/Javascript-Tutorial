//Object is A collection of properties.
/* 
eg: of objects
var person ={
    name: lenny,
    age: 20,
    hair: black
} 
here person is an object, with properties like name,age and hair
*/

//We can create objects using an object initializer, or we can first create a constructor function
//1. Using Object Initializers
//We can initialize an object using new Object(), Object.create()
//2. Using a Constructor Function
//the example given below is type 2


//since its a constructor it doesn't have a return and still is getting initialised
//here rectangle is the object, and it has a set of properties like length,breadth,area, perimeter
function rectangle(a,b){
    this.length = a;
    this.breadth = b;
    this.perimeter = 2 * (a+b);
    this.area = a*b;
}


//here we create an instance, it means we create a new rectangle and assign it properties.. as mentioned above
var rec = new rectangle(10,20);
console.log(rec.length);
console.log(rec.breadth);
console.log(rec.perimeter);
console.log(rec.area);