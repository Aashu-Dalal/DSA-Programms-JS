let a1 = [1, 4, 5, 8];
let a2 = [2, 3, 6, 7, 9];
let newArr = Array(a1.length + a2.length);
let i = (j = k = 0);
while (i < a1.length && j < a2.length) {
  if (a1[i] < a2[j]) {
    newArr[k++] = a1[i++];
  } else newArr[k++] = a2[j++];
}
while (i < a1.length) {
  newArr[k++] = a1[i++];
}
while (j < a2.length) {
  newArr[k++] = a2[j++];
}
console.log(newArr);
