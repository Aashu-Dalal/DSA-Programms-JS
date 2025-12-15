let n = 81;

while (n > 1) {
    if (n % 3 !== 0) {
        console.log("Not a power of 3");
        break;
    }
    n = n / 3;
}

if (n === 1) {
    console.log("Power of 3");
}
