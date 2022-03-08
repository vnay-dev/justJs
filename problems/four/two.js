//  ideal solution

//  store the first item to a variable
//  iterate through the entire array till last element
//  we can do the above by placing the limit as n-1
//  once the control comes out of the loop, it will be at last element
//  store the temp on the last element

// j < arr.length :- for length 3, iterations will be 0, 1, 2 (last item)
//                   once it comes out of the loop, j will be 3
// j < arr.length - 1 :- for length 3, iterations will be 0, 1
//                   once it comes out of the loop, j will be 2 (last item, which we need)

let arr = [1, 2, 3, 4, 5, 6, 7];
let iterations = 2;

let count = 0;

while (count < iterations) {
  let temp = arr[0];
  for (let j = 0; j < arr.length - 1; j++) {
    arr[j] = arr[j + 1];
  }
  arr[arr.length - 1] = temp;
  count++;
}

console.log(arr);
