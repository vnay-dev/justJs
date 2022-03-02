const radius = [2, 4, 6, 8];

const findArea = (radius) => {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log(findArea(radius));

const findCircumference = (radius) => {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

console.log(findCircumference(radius));


