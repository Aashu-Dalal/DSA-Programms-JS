let prompt = require('prompt-sync')();

function hideCreditCard(input) {
    if (input.length <= 0 || input.length > 16) {
        console.log("Credit card number must be 16 digits!");
        return; // stop function if invalid
    }

    let result = '';
    for (let i = 0; i < input.length; i++) {
        if (i < input.length - 4) {
            result += '*';
        } else {
            result += input[i];
        }
    }
    return result;
}

let input = prompt("Enter Your Credit Card Number: ");
console.log(hideCreditCard(input));
