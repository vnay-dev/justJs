function add(x, y) {
  console.log(x + y);
}

let addTwo = add.bind(this, 2);

// below is the functional representation of above bind function

// function addTwo(y) {
//   let x = 2;
//   console.log(x + y);
// }

addTwo(5); // the arguement which is passed here corresponds to parameter y in the function defenition

// this is called function currying
// we created an add()
// using that add() we created addTwo()