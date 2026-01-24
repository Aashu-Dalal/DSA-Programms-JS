let arr = [11, -3, 2, 7, -5, 1]
let found = false

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            if (arr[i] + arr[j] + arr[k] === 0) {
                console.log("true");
                found = true;
                break;
            }
        }
        if (found) break;
    }
    if (found) break;
}

if (!found) {
    console.log("false");
}
