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

let range = ["10", "25", "30"];

showInfo.apply(apple, range);

// for array of arguements we use apply method
// here, 10 corresponds to weight and 25 corresponds to rank
// 30 will be the third arguement (hypothetically)
