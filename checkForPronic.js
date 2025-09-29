let prompt = require('prompt-sync')();  
let n = Number(prompt("Enter a number: "));  

if (isNaN(n)) {  
    console.log("Please enter a valid number input.");  
    process.exit(0);   
}  

let pronic = false;  
for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {  
    if (n === i * (i + 1)) {  
        pronic = true;  
        break;  
    }  
}  

if (pronic) {  
    console.log("Pronic");  
} else {  
    console.log("Not Pronic");  
}
