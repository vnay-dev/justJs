let counter = 0;

function getData() {
  console.log("Data fetch api called...", counter++);
}

// checks if any two keypresses have occurred in between 300ms
// if no two keypresses are found between 300ms, function gets called
const doSomeMagic = function (fn, delay) {
  return function () {
    setTimeout(() => {
      fn();
    }, delay);
  };
};

// if the difference between the time of two keypresses is greater than or equal to 300ms, call getData()
// the below function needs to be called in the html page (hence make the change in html page)
const betterFunction = doSomeMagic(getData, 300);
