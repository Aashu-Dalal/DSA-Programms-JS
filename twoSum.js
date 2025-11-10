function findPairs(arr, target) {
    let pairs = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }

    return pairs;
}


let arr = [1, 2, 3, 4, 5];
let target = 5;
console.log(findPairs(arr, target));
