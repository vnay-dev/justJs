let sum = function (a) {
  return function (b) {
    if (b != undefined) { // else it wont work for zero as an arguement
      return sum(a + b);
    }
    return a;
  };
};

console.log(sum(1)(2)(3)(0)());
