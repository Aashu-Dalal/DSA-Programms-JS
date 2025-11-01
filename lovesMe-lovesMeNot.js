function lovesMeOrNot(n) {
  const phrases = []; 
 
  for (let i = 1; i <= n; i++) {

    if (i % 2 !== 0) {
      phrases.push("Loves me");
    } else {
      phrases.push("Loves me not");
    }
  }
  
  return phrases.join(", ");
}
console.log(lovesMeOrNot(5))
