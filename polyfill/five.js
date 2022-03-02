let cars = {
  name: "Elon Musk",
  firm: "Tesla",
};

let showInfo = function (interest, likes, passion) {
  console.log(
    `${this.name} resides in ${this.firm} likes ${interest}, ${likes} and ${passion}`
  );
};

let displayInfo = showInfo.bind(cars, "bitcoin"); // normal bind()
displayInfo("crypto", "physics");

Function.prototype.customBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let showDetails = showInfo.customBind(cars, "crypto", "signal"); // custom bind()
showDetails("paypal", "mars");

// checking with more arguements in both bind() and function()
