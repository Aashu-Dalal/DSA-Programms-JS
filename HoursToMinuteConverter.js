let prompt = require('prompt-sync')();
let hr = Number(prompt("Enter hours: "));

const minConverter = hr => hr * 60;

if (isNaN(hr)) {
    console.log("Please enter a valid number!");
} else {
    console.log(`${hr} hours in minutes are ${minConverter(hr)} minutes`);
}
