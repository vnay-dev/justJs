let sum = (a) => (b) => b != undefined ? sum(a + b) : a;

console.log(sum(1)(2)(3)(0)(9)());

// es6 syntax
