// stopping event propogation in capturing

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
  (e) => {
    console.log("Child clicked");
    e.stopPropagation();
  },
  true
);

// output : grandparent, parent, child
// event propogation stops at child

// if stop propogation was added inside parent
// output : grandparent, parent
// event propogation stops at parent
