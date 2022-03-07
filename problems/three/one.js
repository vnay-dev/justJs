// my attempt

let arr = [1, 2, 0, 5, 3, 21, 0, 8];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] != 0) {
    arr[count] = arr[i];
    count++;
  }
}

for (let j = arr.length; j > count; j--) {
  arr[j] = 0;
}

console.log(arr);
