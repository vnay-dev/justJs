// localStorage.setItem("key1","val1") // set data
// localStorage.getItem("key1")        // val1
// localStorage.setItem("key1","val2") // overwrites
// localStorage.removeItem("key1")     // removes key1 data pair
// localStorage.clear()                // clears everything

// following is a mistake
let user = {
  name: "Elon",
};
localStorage.setItem("user", user); // this stores the value pair as [object Object]
// in the above code the function tries to parse the object into string
// like String(user) will be "[object Object]"
localStorage.getItem("user"); // gives us "[object Objet]"

// correct way
localStorage.setItem("user", JSON.stringify(user)); // this stores the object as { name : "Elon" }
JSON.parse(localStorage.getItem("user")); // gives us the object

// session storage methods are written exactly the same way :
sessionStorage.setItem("user", user);

// cookies
document.cookie = "name=Bob";
document.cookie = "name=Bob; expires=" + new Date(2020,0,1).toUTCString() // jan 1st
console.log(document.cookie)    // is the only way to display cookie