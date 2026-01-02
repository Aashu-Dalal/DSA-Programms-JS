function isPostalCode(code) {
    if (code.length !== 6) {
        return false;
    }

    if (code[0] === "0") {
        return false;
    }

    for (let i = 0; i < code.length; i++) {
        if (code[i] < "0" || code[i] > "9") {
            return false;
        }
    }

    return true;
}

let value = "826386";

if (isPostalCode(value)) {
    console.log(`${value} is a valid postal code`);
} else {
    console.log(`${value} is NOT a valid postal code`);
}
