function sameParity(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] % 2 === arr[i + 1] % 2) {
            return true;
        }
    }
    return false; 
}

console.log(sameParity([2, 4, 6, 8])); 
console.log(sameParity([1, 3, 5, 7])); 
console.log(sameParity([2, 3, 4, 5])); 
console.log(sameParity([2, 3, 6, 7])); 
console.log(sameParity([2, 3, 6, 9])); 
