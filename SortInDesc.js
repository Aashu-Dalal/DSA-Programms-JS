let numbers = [5, 2, 9, 1, 7];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - i - 1; j++) {
    if (numbers[j] < numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log("Sorted array in descending order:", numbers);
