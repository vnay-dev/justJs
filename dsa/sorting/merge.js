const arr = [3, 4, 1, 9, 11, 6, 2];

function merge(arr, left, mid, right) {
  let size1 = mid - left + 1;
  let size2 = right - mid;

  const arr1 = new Array(size1);
  const arr2 = new Array(size2);

  for (let i = 0; i < size1; i++) {
    arr1[i] = arr[left + i];
  }
  for (let j = 0; j < size2; j++) {
    arr2[j] = arr[mid + 1 + j];
  }

  let lb = 0;
  let ub = 0;
  let k = left;

  while (lb < size1 && ub < size2) {
    if (arr1[lb] <= arr2[ub]) {
      arr[k] = arr1[lb];
      lb++;
    } else {
      arr[k] = arr2[ub];
      ub++;
    }
    k++;
  }
  while (lb < size1) {
    arr[k] = arr1[lb];
    lb++;
    k++;
  }

  while (ub < size2) {
    arr[k] = arr2[ub];
    ub++;
    k++;
  }
}

function merge_sort(arr, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    merge_sort(arr, left, mid);
    merge_sort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}

merge_sort(arr, 0, arr.length - 1);
console.log(arr);
