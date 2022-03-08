// my attempt

let arr = [1, 2, 3, 4, 5, 6, 7];
let iterations = 2;

let count = 0;

while (count < iterations) {
  let temp = arr[0];
  for (let j = 0; j < arr.length; j++) {
    if (j === arr.length - 1) {
      arr[j] = temp;
    } else {
      arr[j] = arr[j + 1];
    }
  }
  count++;
}

console.log(arr);
