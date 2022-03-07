// count of clicks
let count = 0
document.querySelector("#clickMe").addEventListener("click", function () {
    console.log("Clicked me", ++count)
});

// using a global variable is not a good practice
// instead we need to make a closure
// ensure that count cannot get modified elsewhere in the program
