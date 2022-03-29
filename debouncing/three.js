let counter = 0;

function getData() {
  console.log("Data fetch api called...", counter++);
}

// if a keystroke happens we must stop calling the function
// this is done by clearing the timeout
// whenever a new function call is made and 300ms has not passed
const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

// betterfunction() will be called on each and every key stroke
const betterFunction = debounce(getData, 300);

// now the api gets called only when the difference between two keystrokes are greater than 300ms
// i.e only while typing gets paused

// when betterFunction() is called
// multiple copies of the timer function wil be returned
// if the timer is not cleared, i.e if the time goes over delay, these getData will be called
