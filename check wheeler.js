function checkVehicle(wheels) {
    if (wheels === 2) {
        return "Two-wheeler";
    } else if (wheels === 4) {
        return "Four-wheeler";
    } else {
        return "Invalid";
    }
}

console.log(checkVehicle(2));
console.log(checkVehicle(4));
console.log(checkVehicle(3));
