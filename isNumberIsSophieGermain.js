function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function sophieGermainPrime(p) {
    let value = 2 * p + 1;

    if (!isPrime(p)) {
        console.log(`${p} is not a Sophie Germain prime`);
        return;
    }

    if (isPrime(value)) {
        console.log(
            `${p} is a Sophie Germain prime`
        );
    }else{
        console.log(`${p} is not Sophie Germain prime `)
    } 
}

sophieGermainPrime(5);
sophieGermainPrime(7);
sophieGermainPrime(23);
sophieGermainPrime(16);
