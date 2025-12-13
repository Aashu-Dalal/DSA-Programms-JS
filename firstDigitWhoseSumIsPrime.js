let arr = [23, 41, 16, 88, 29];

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let found = false;

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    if (isPrime(sum)) {
        console.log(
            "Number:", arr[i],
            "| Digit Sum:", sum,
            "| Prime: Yes"
        );
        found = true;
        break;
    }
}

if (!found) {
    console.log("No number found whose digit sum is prime");
}
