let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let found = false;

for (let i = 0; i < matrix.length; i++) {
    let minRow = matrix[i][0];
    let colIndex = 0;

    // row ka minimum
    for (let j = 1; j < matrix[i].length; j++) {
        if (matrix[i][j] < minRow) {
            minRow = matrix[i][j];
            colIndex = j;
        }
    }

    // check column me maximum hai ya nahi
    let isSaddle = true;
    for (let k = 0; k < matrix.length; k++) {
        if (matrix[k][colIndex] > minRow) {
            isSaddle = false;
            break;
        }
    }

    if (isSaddle) {
        console.log("Saddle Point:", minRow);
        found = true;
        break;
    }
}

if (!found) {
    console.log("No Saddle Point");
}
