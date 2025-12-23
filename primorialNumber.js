function primorial(n) {
    let count = 0;
    let num = 2;
    let result = 1;
    let primesUsed = [];

    while (count < n) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            result *= num;
            primesUsed.push(num);
            count++;
        }

        num++;
    }

    console.log("Number of primes:", n);
    console.log("Primes used:", primesUsed.join(" × "));
    console.log("Primorial result:", result);
}

primorial(5);
