let num = "0306406152";

if (num.length !== 10) {
    console.log("Number must be exactly 10 digits");
} else {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        let digit = Number(num[i]);
        sum += digit * (i + 1);
    }

    console.log("Sum =", sum);

    if (sum % 11 === 0) {
        console.log("Yes, the number is a valid ISBN-10");
    } else {
        console.log("No, the number is not a valid ISBN-10");
    }
}
