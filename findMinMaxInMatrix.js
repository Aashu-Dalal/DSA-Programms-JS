let matrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

let rows = matrix.length;
let cols = matrix[0].length;

for (let i = 0; i < rows; i++) {
    let rowMax = matrix[i][0];
    for (let j = 1; j < cols; j++) {
        if (matrix[i][j] > rowMax) rowMax = matrix[i][j];
        }
        console.log("Max of row " + i + ": " + rowMax);
    }

    for (let j = 0; j < cols; j++) {
        let colMin = matrix[0][j];
        for (let i = 1; i < rows; i++) {
        if (matrix[i][j] < colMin) colMin = matrix[i][j];
    }
console.log("Min of column " + j + ": " + colMin);
}
