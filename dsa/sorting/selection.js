const arr = [3, 4, 1, 9, 11, 6, 2, 55];
let temp;

for (let i = 0; i < arr.length; i++) {
  for (j = i+1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }
}

console.log(arr);