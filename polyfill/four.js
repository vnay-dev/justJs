// what if the method takes in many more arguements
// which gets passed through the function call

let cars = {
  name: "Elon Musk",
  firm: "Tesla",
};

let showInfo = function (interest, likes) {
  // more arguments
  console.log(
    `${this.name} resides in ${this.firm} likes ${interest} and ${likes}`
  );
};

let displayInfo = showInfo.bind(cars, "bitcoin");
displayInfo("crypto"); // like this

Function.prototype.customBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) { // arguement name should not be the same as the bind() arguements
    // we need to concactinate both set of arguements that gets passed from the bind() and function()
    obj.apply(args[0], [...params, ...args2]);
  };
};

let showDetails = showInfo.customBind(cars, "crypto");
showDetails("paypal"); // this arguement is recieved in the return function
