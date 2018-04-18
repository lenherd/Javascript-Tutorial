//NOTE: this code demonstrates the synchronous working
console.log('1');
function randomDemo() {
  var random = Math.floor((Math.random() * 10) + 1);
  return random;
}

console.log('2');
function noPromise() {
  var no = randomDemo();
  if (no == 6) {
    return no;
  }
  else {
    return no;
  }
  console.log('3');
};

console.log('4');
var something = noPromise();
if (something == 6) {
  console.log("Succeeded with:" + something);
}
else {
  console.log("Failed because of:" + something);
};

console.log('5');

//Note : Try the same code with promise and see the diff