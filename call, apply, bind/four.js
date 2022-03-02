let showInfo = function (number) {
  console.log(`${this.color} coloured ${this.type} is ${number} in number`);
};

let apple = {
  color: "Red",
  type: "fruit",
};

let beetroot = {
  color: "Brown",
  type: "vegetable",
};

showInfo.call(apple, "12");
showInfo.call(beetroot, "8");

// arguements can be passed 
// but what if the number of arguements increases ?
