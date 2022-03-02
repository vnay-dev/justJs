const radius = [2, 4, 6, 8];

const area = (radius) => {
  return Math.PI * radius * radius;
};

const circumference = (radius) => {
  return 2 * Math.PI * radius;
};

Array.prototype.calculate = function(logic){    // this won't work for arrow functions
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculate(area));
