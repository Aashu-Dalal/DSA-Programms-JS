// checking for number

let prompt = require('prompt-sync')()
num = prompt("Enter a number: ")

i = 0; j = num.length - 1;
ispalindrome = true;

while(i<j){
    if(num[i]===num[j]){
        i++;
        j--;
    }
    else{
        ispalindrome = false        
        break;
    }
}
if(ispalindrome == true){
    console.log("Is palindrome")
}
else{
    console.log("not a palindrome")
}
