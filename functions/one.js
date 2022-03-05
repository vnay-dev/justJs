var x = 1; // global
a();
b();
console.log(x);

function a() {
  var x = 10; // same variable name
  console.log(x);
}

function b() {
  var x = 100; // same variable name
  console.log(x);
}

// output

// 10
// 100
// 1

/*
    first, it creates a global execution context
    divides it into two sections : memory and code component

    memory gets allocated to x, function a, function b
    x : undefined
    a and b : its own function code

    code runs
        line 1 : replaces x with 1
        line 2 : function invokation a
                 execution context instance is created for the function a
                 this execution context is independent from the global exxecution context
                 x : undefined (different x)
                 execution context a pushed onto the call stack
                 
                 code runs
                 x gets replaced by 10
                 now, the console log inside the function a 
                 will search for x in the local execution context
                 which is 10
                 exec context of fun a gets deleted
                 popped out

        line 3 : function invokation b
                 execution context instance is created for the function b
                 x : undefined (different x)
                 execution context b pushed onto the call stack
                 
                 code runs
                 x gets replaced by 100
                 now, the console log inside the function b
                 will search for x in the local execution context
                 which is 100
                 exec context of fun b gets deleted
                 popped out

        line 4 : console.log(x)
                 search for x in the local memory
                 hence prints 1
                 global exec context will be poppped out and deleted


*/
