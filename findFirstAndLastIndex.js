let arr = [10, 20, 30, 15, 20, 15, 40, 20];
let target = 20;

let first = arr.indexOf(target);
let last = arr.lastIndexOf(target);

if (first === -1) {
  console.log("Element not found");
} else {
  console.log(`First occurrence at index: ${first}`);
  console.log(`Last occurrence at index: ${last}`);
}
