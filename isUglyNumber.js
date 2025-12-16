let n = 30;

if (n <= 0) {
    console.log("Not an Ugly Number");
} else {
    let temp = n;

    while (temp % 2 === 0) {
        temp = temp / 2;
    }

    while (temp % 3 === 0) {
        temp = temp / 3;
    }

    while (temp % 5 === 0) {
        temp = temp / 5;
    }

    if (temp === 1) {
        console.log(n + " is an Ugly Number");
    } else {
        console.log(n + " is NOT an Ugly Number");
    }
}
