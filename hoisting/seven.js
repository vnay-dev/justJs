show();
console.log(x);
console.log(show);

var x = 7;

var show = () => {
  console.log("Hello world");
};

// output

// this gives an error saying
// show is not a function

// reason : now show function is converted to an arrow function
//          hence it behaves like a variable
//          so during memory allocation phase
//          show also gets intialised like a variable with undefined as the value

//          check the value of show in global scope in the console
//          it shows undefined instead of code of the function
//          which means it got treated as a variable
//          because of the arrow function

// the behaviour shown by the arrow function is also shown for the below type of declaration
// this is the third way of declaring functions

// var show = function(){
//   console.log("Hello world")
// }

// here also, function gets treated as a variable
// hence, produces the same error as the arrow function
