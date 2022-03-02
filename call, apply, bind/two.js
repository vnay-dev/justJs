let apple = {
  color: "Red",
  type: "fruit",
  showInfo: function () {
    console.log(`${this.color} coloured ${this.type}`);
  },
};

let beetroot = {
  color: "Brown",
  type: "vegetable",
};

apple.showInfo.call(beetroot);  

// If another object (say beetroot) wants to access the method which already belongs to apple
// we can use call method
// because its not practical to repeat the method in each object
// function borrowing
