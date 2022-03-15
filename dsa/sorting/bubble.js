const arr = [3, 4, 1, 9, 11, 6, 2];
let temp;

for (let i = 0; i < arr.length; i++) {
  for (j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}

console.log(arr);
