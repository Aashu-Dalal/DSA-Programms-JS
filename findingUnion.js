function findUnion(arr1, arr2) {
    
    let combined = [...arr1, ...arr2];
    
    let unionSet = new Set(combined);
    
    return Array.from(unionSet);
}

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let result = findUnion(arr1, arr2);
console.log("Union of two arrays:", result);
