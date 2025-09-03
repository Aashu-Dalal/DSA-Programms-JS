let prompt = require('prompt-sync')()
str = prompt("Enter a string: ")

i = 0; j = str.length - 1;
ispalindrome = true;

while(i<j){
    if(str[i]===str[j]){
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
