const radius = [2, 4, 6, 8];

const area = (radius) => {
  return Math.PI * radius * radius;
};

const circumference = (radius) =>{
  return 2 * Math.PI * radius
}

Array.prototype.calculate = (arr, logic) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};

console.log(radius.calculate(radius, area))
