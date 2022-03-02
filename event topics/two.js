document.querySelector("#grandparent").addEventListener("click", () => {
  console.log("Grandparent clicked");
});

document.querySelector("#parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.querySelector("#child").addEventListener("click", () => {
  console.log("Child clicked");
});

// when child is clicked : child, parent , grandparent is the order of execution as seen in the console
// when parent is clicked : parent , grandparent is the order of execution as seen in the console
// when grandparent is clicked : grandparent is seen in the console
// this is an eg of bubbling out
// adding the third parameter as false will show the same output