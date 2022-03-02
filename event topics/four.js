document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent clicked");
  },
  true
); // capture

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked");
  },
  false
); // bubbling

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child clicked");
  },
  true
); // capture

// output : grandparent, child, parent
// first capture cycle occurs
// so it executes all capture events (1. grandparent 2. child)
// once all the capture event cycles are finished
// bubbling cycle is executed (3. parent)
