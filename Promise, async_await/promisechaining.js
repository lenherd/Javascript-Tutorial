/***********************************************
 * 1. before this understand promise2.js
 * 2. here we will chain promises
 * 3. Let's say, you, the kid, promise your friend that you will show them the new phone when your mom buy you one.
 * 4. So for that you write a new promise
  
**********************************************/


var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

// 2nd promise
function showOff(phone) {
    return new Promise(
        function (resolve, reject) {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};


// call our promise
function askMom() {
    willIGetNewPhone
        .then(showOff) // chain it here
        .then(function (fulfilled) {
            console.log(fulfilled);
            // output: 'Hey friend, I have a new black Samsung phone.'
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
            // output: 'mom is not happy'
        });
};

askMom();