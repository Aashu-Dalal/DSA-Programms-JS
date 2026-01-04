function findHCF(a, b) {
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

let num1 = 36;
let num2 = 60;

console.log(`HCF of ${num1} and ${num2} is ${findHCF(num1, num2)}`);
