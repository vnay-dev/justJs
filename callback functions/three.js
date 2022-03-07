// building a closure

function attachEventListener() {
  let count = 0;
  document.querySelector("#clickMe").addEventListener("click", function () {
    console.log("Clicked me", ++count);
  });
}

attachEventListener()

// closure scope maintains the value of count 
// console --> eventlisteners tab shows everything
// handler has the cb we atteched
// inside that we have 2 scopes : closure and global 

// why do we remove event listeners
// because we cant free up the memory allocated
// because they are heavy and can slow down the performance
// so when removed they are garbage collected
