let matrix = [
    [3, 7, 4],
    [7, 2, 9],
    [3, 74, 85]
];

let isDiagonalDominant = true;

for (let i = 0; i < matrix.length; i++) {
    let diagonal = Math.abs(matrix[i][i]);
    let sum = 0;

    for (let j = 0; j < matrix[i].length; j++) {
        if (i !== j) {
            sum += Math.abs(matrix[i][j]);
        }
    }

    if (diagonal < sum) {
        isDiagonalDominant = false;
        break;
    }
}

if (isDiagonalDominant) {
    console.log("Matrix is Diagonally Dominant");
} else {
    console.log("Matrix is NOT Diagonally Dominant");
}
