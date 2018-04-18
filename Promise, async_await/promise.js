//Note: This code demonstrates asynchronous working using promises

console.log('1');
function randomDemo() {
  //Math.floor rounds up the value to the nearest integer
  //Math.random().... generates a random number between 0-1
  //passing a random number between 1-10
  var random = Math.floor((Math.random() * 10) + 1);
  return random;
}

console.log('2');
var promise = new Promise(function (resolve, reject) {
  var no = randomDemo();
  if (no == 6) {
    resolve(no);
  }
  else {
    reject(no);
  }
  console.log('3');
});

console.log('4');
promise
  .then(function (success) {
    console.log("Succeeded with:" + success);
  }, function (err) {
    console.log("Failed because of:" + err);
  });

console.log('5');
console.log("Run synchrinous.js to understand how promises work asynchronously");
//Note : Try the same code without promise and see the diff