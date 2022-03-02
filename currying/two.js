function add(x, y) {
  console.log(x + y);
}

let addTwo = add.bind(this, 2);
addTwo(5);

let addThree = add.bind(this, 3)
addThree(5)

