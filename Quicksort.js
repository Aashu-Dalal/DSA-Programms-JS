function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function findPivotIdx(arr, first, last) {
  let pivot = arr[first];
  let i = first + 1,
    j = last;
  while (i <= j) {
    while (i <= last && arr[i] <= pivot) i++;
    while (j > first && arr[j] > pivot) j--;
    if (i < j) swap(arr, i, j);
  }
  swap(arr, first, j);
  return j;
}

function quicksort(arr, first, last) {
  if (first >= last) return;
  let pIdx = findPivotIdx(arr, first, last);
  quicksort(arr, first, pIdx - 1);
  quicksort(arr, pIdx + 1, last);
}

let arr = [7, 2, 1, 6, 8, 5, 3, 4];
quicksort(arr, 0, arr.length - 1);
console.log(arr);
