function perrin(n) {
    if (n === 0) return 3;
    if (n === 1) return 0;
    if (n === 2) return 2;

    let p0 = 3, p1 = 0, p2 = 2;
    let pn;

    for (let i = 3; i <= n; i++) {
        pn = p0 + p1;
        p0 = p1;
        p1 = p2;
        p2 = pn;
    }

    return pn;
}

let n = 5;
console.log(`Perrin number at position ${n} is: ${perrin(n)}`);
