function add(x, y) {
  console.log(x + y);
}

let addTwo = add.bind(this);
addTwo(2, 10);

// we deleted all the arguements
// and added all the parameters via function call
