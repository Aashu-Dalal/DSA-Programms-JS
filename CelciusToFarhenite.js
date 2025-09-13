function converter() {
    let c = Number(prompt("Enter value of Celsius"));
    
    if (isNaN(c)) {
        console.log("Please enter a valid number.");
        return; 
    } else {
        return (c * 9/5) + 32;
    }
}

let result = converter();
if (result !== undefined) {
    console.log(`Converted temperature: ${result}°F`);
}
