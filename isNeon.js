function isNeon(num) {
    let square = num * num;
    let sum = 0;

    while (square > 0) {
        sum += square % 10;
        square = Math.floor(square / 10);
    }

    if (sum === num) {
        console.log("Neon Number");
    } else {
        console.log("Not a Neon Number");
    }
}

// Examples
isNeon(9);  // Neon Number
isNeon(7);  // Not a Neon Number
