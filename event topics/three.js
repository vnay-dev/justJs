document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent clicked");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child clicked");
  },
  true
);

// when child is clicked : grandparent, child, parent is the order of execution as seen in the console
// when parent is clicked : grandparent, parent is the order of execution as seen in the console
// when grandparent is clicked : grandparent is seen in the console
// this is an eg of capturing or trickling out
