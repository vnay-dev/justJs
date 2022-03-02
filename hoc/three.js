const radius = [2, 4, 6, 8];

const area = (radius) => {
  return Math.PI * radius * radius;
};

const circumference = (radius) =>{
  return 2 * Math.PI * radius
}

const calculate = (radius, logic) => {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference))
