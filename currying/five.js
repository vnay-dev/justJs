// function currying implemented using closures
// presets the value of x which can be accessed inside the return function

function multiply(x) {
  return function (y) {
    console.log(x * y);
  };
}

let multiplyByTwo = multiply(2);  // 2 will be assigned for x
multiplyByTwo(7);                 // 7 will be assigned for y

let multiplyByThree = multiply(3);
multiplyByThree(7);
