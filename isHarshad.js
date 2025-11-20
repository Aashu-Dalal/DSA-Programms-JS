function isHarshad(n) {
    let copy = n;
    let sum = 0;

    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    if (copy % sum === 0) {
        console.log("Harshad Number");
    } else {
        console.log("Not a Harshad Number");
    }
}

// Example
isHarshad(18);
isHarshad(20);
isHarshad(129);
