Array.prototype.last = function () {
  return this.length ? this[this.length-1] : -1
}
let arr = [2,'', null , undefined]
let array= []
console.log(arr.last())
console.log(array.last())
