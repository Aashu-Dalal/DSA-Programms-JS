function isPalindrome(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        if (arr[start] !== arr[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

// Example
let arr = [1, 2, 3, 2, 1];
console.log(isPalindrome(arr)); // true
