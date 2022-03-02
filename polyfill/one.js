// polyfill is like a browser fallback
// what if our browser don't have a bind function?
// we may have to write our own custom bind function

let cars = {
  name: "Elon Musk",
  firm: "Tesla",
};

let showInfo = function () {
  console.log(`${this.name} resides in ${this.firm}`);
};

let displayInfo = showInfo.bind(cars)
displayInfo()

// created a simple bind function to start off
