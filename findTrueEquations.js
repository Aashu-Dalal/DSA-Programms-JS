function findTrueEquations(equations) {
  const result = [];

  for (let i = 0; i < equations.length; i++) {
    const parts = equations[i].split('=');
    if (eval(parts[0]) == parts[1]) {
      result.push(equations[i]);
    }
  }

  return result;
}

const equations = ['2+2=4', '3*3=6', '1+1=3', '5/5=1'];
console.log(findTrueEquations(equations));
