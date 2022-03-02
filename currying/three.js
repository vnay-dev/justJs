function add(x, y) {
  console.log(x + y);
}

let addTwo = add.bind(this, 2, 9);
addTwo(5);

// we added a third arguement which corresponds to y
// this added arguement will ignore the parameter passed via function call


