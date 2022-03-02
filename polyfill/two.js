let cars = {
  name: "Elon Musk",
  firm: "Tesla",
};

let showInfo = function () {
  console.log(`${this.name} resides in ${this.firm}`);
};

let displayInfo = showInfo.bind(cars);
displayInfo();

// bind function must be accessible to all functions
Function.prototype.customBind = function (...args) {
  let obj = this; // must invoke the function onto which binding happens (showInfo)
  // bind function always returns a function
  return function () {
    obj.call(args[0]);
  };
};

let showDetails = showInfo.customBind(cars); // custom bind function
showDetails();
