const arr = [3, 4, 1, 9, 11, 6, 2];

function partition(arr, p, r) {
  let temp = arr[p];
  let index = p;

  for (let j = p + 1; j <= r; j++) {
    if (arr[j] <= temp) {
      index++;
      [arr[j], arr[index]] = [arr[index], arr[j]];
    }
  }
  [arr[p], arr[index]] = [arr[index], arr[p]];

  return index;
}

function quickSort(arr, p, r) {
  if (p < r) {
    let pivot = partition(arr, p, r);
    quickSort(arr, p, pivot - 1);
    quickSort(arr, pivot + 1, r);
  }
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);
