let prompt = require('prompt-sync')();

let mainStr = prompt("Enter the main string: ");
let subStr = prompt("Enter the substring to search: ");

if (mainStr.toLowerCase().includes(subStr.toLowerCase())) {
    console.log(`Yes, "${mainStr}" contains "${subStr}".`);
} else {
    console.log(`No, "${mainStr}" does not contain "${subStr}".`);
}
