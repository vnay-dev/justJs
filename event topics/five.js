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
  false
); // bubbling

// output : grandparent, child, parent
// first capturing cycle is executed
// so it executes all capture events (1. grandparent)
// then it sees parent (it ignores as it is false)
// then it sees child (it ignores as it is false)
// now bubbling cycle starts
// it bubbles out from the child to the parent (2. child 3. parent)
