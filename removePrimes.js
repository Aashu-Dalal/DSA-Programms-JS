function removePrimes(arr) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num <= 1) {
            newArray.push(num);
            continue;
        }

        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (!isPrime) {
            newArray.push(num);
        }
    }

    return newArray;
}

console.log(removePrimes([6,12, 3, 7, 63, 11, 5]));
