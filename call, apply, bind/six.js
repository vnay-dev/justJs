let showInfo = function (weight, rank) {
  console.log(
    `Weight of ${this.color} coloured ${this.type} is ${weight}kg but is ranked as ${rank}kg`
  );
};

let apple = {
  color: "red",
  type: "fruit",
};

let beetroot = {
  color: "brown",
  type: "vegetable",
};

let displayInfo = showInfo.bind(apple, "500", "90");
displayInfo();

// passing array as arguement will create a bug
// creates a copy of the function
