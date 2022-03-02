// function currying implemented using closures
// presets the value of x which can be accessed inside the return function

function multiply(x) {
  return function (y) {
    console.log(x * y);
  };
}

let multiplyByTwo = multiply(2);
multiplyByTwo(7);

let multiplyByThree = multiply(3);
multiplyByThree(7);
