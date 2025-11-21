function isAutomorphic(num) {
    let square = num * num;
    let temp = num;

    while (temp > 0) {
        if (temp % 10 !== square % 10) {
            console.log("Not Automorphic");
            return;
        }
        temp = Math.floor(temp / 10);
        square = Math.floor(square / 10);
    }

    console.log("Automorphic");
}

// Examples
isAutomorphic(5);   // Automorphic
isAutomorphic(76);  // Automorphic
isAutomorphic(7);   // Not Automorphic
