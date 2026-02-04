function quadraticRoots(a, b, c){

    let d = b*b - 4*a*c

    let r1 = (-b + Math.sqrt(d)) / (2*a)
    let r2 = (-b - Math.sqrt(d)) / (2*a)

    return [r1, r2]
}

console.log(quadraticRoots(1, -3, 2))
