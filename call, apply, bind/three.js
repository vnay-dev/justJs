let showInfo = function () {
  console.log(`${this.color} coloured ${this.type}`);
};

let apple = {
  color: "Red",
  type: "fruit",
};

let beetroot = {
  color: "Brown",
  type: "vegetable",
};

showInfo.call(apple);
showInfo.call(beetroot);

// we can write the method globally
// let both the objects access it seaparately
