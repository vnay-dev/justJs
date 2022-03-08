// my attempt plus reference

let arr = [
  19, 7, 0, 3, 18, 15, 12, 6, 1, 8, 11, 10, 9, 5, 13, 16, 2, 14, 17, 4,
];
let temp;

for (let i = 0; i < arr.length; ) {
  if (arr[i] != -1 && arr[i] != i) {
    temp = arr[arr[i]];
    arr[arr[i]] = arr[i];
    arr[i] = temp;
  } else {
    i++;
  }
}

// modified attempt

// let i = 0;
// while (i < arr.length) {
//   if (arr[i] != -1 && arr[i] != i) {
//     temp = arr[arr[i]];
//     arr[arr[i]] = arr[i];
//     arr[i] = temp;
//   } else {
//     i++;
//   }
// }

console.log(arr);

//  for (int i = 5; i != 0;) {
//         System.out.println(i);
//  }
// Will output the integer 5 forever.

// It's the equivalent of:

//  int i = 5;
//  while (i != 0) {
//      System.out.println(i);
//  }
// It outputs 5 forever because i is always 5 and
// i is always different than 0.
// In order to escape the loop,
// you have to explicitly update the value of i until it holds the value of 0.
