function calculateProfitOrLoss(sellingPrice, costPrice) {
    const result = sellingPrice - costPrice;

    if (result > 0) {
        return "Profit";
    } else if (result < 0) {
        return "Loss";
    } else {
        return "Break-even";
    }
}

console.log(calculateProfitOrLoss(50, 30));
console.log(calculateProfitOrLoss(30, 50));
console.log(calculateProfitOrLoss(45, 45));
