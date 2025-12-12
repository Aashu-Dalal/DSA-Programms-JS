let arr = [12, 35, 7, 44, 101];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    if (sum % 2 === 0) {
        count++;
        console.log(arr[i] + " → digit sum is EVEN");
    } else {
        console.log(arr[i] + " → digit sum is ODD");
    }
}

console.log("Total numbers with even digit-sum:", count);
