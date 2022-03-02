// because this operation is expensive
// we can find methods to improve it's performance
// by stopping the event propagtion by adjusting the third parameter

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent clicked");
  },
  false
); 

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent clicked");
    e.stopPropagation()
  },
  false
); 

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child clicked");
  },
  false
); 

// output : child, parent
// once it reaches the parent, the propogation stops

// if the stop propogation code was written inside child 
// output : child
// once it reaches child, the propogation stops

