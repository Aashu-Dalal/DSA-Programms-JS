let arr = [40, 30, 50, 60, 40, 80];
let peak = [];

for (let i = 0; i < arr.length; i++) {
    if (i == 0 && arr[i] > arr[i + 1]) {
        peak.push(arr[i]);
    }
    else if (i == arr.length - 1 && arr[i] > arr[i - 1]) {
        peak.push(arr[i]);
    }
    else if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
        peak.push(arr[i]);
    }
}

console.log("mini peak", peak);
