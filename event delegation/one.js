document.querySelector("#category").addEventListener("click", (e) => {
  console.log(e.target.id);
  // this redirects to the correct page if we have nested elements
  if (e.target.tagName == "LI") {
    window.location.href = `/${e.target.id}`;
  }
});

// SECOND USE CASE

// to execute a functionality for the element that has uppercase
// whenever we type inside an element with data-uppercase attribute
// it automatically converts it to uppercase
// it is a behavioural pattern

document.querySelector("#form").addEventListener("keyup", (e) => {
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
