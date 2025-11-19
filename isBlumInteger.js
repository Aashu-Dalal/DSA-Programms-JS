function isPrime(num){
    if(num < 2) return false;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}

function isBlumInteger(n){
    let factors = [];

    // Find factors
    for(let i = 2; i <= n/2; i++){
        if(n % i === 0){
            factors.push(i);
        }
    }

    if(factors.length !== 2){
        console.log("Not Blum: n is not semiprime");
        return;
    }

    let p = factors[0];
    let q = factors[1];

    if(isPrime(p) && isPrime(q) && p % 4 === 3 && q % 4 === 3){
        console.log("Blum Integer");
    } else {
        console.log("Not a Blum Integer");
    }
}

// Example
isBlumInteger(15); // Not Blum
isBlumInteger(21); // Blum
