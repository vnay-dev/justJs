document.querySelector("#grandparent").addEventListener("click", () => {
  console.log("Grandparent clicked");
});

// problem is when we click on child and parent, the event gets triggered
// its not restricted to grandparent div
