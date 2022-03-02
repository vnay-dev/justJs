// what if the method takes in arguements

let cars = {
  name: "Elon Musk",
  firm: "Tesla",
};

let showInfo = function (interest) {
  console.log(`${this.name} resides in ${this.firm} likes ${interest}`);
};

let displayInfo = showInfo.bind(cars, "bitcoin");
displayInfo();

Function.prototype.customBind = function (...args) {
  let obj = this;
  let params = args.slice(1); // will remove the first item and returns all the rest of the items **AS AN ARRAY**
  return function () {
    // since we need to pass an array as an arguement we need to use apply()
    obj.apply(args[0], params);
  };
};

let showDetails = showInfo.customBind(cars, "crypto");
showDetails();
