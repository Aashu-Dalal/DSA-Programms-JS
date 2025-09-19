function insertDashes(num) {
  let str = num.toString();     
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i];
    if (i !== str.length - 1) {
      result += "-";
    }
  }
  return result;
}

console.log(insertDashes(25468)); 
console.log(insertDashes(12345)); 
