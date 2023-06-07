// Avoid Mutations and Side Effects Using Functional Programming

/*
Recall that in functional programming, changing or altering things is called
mutation, and the outcome is called a side effect. A function, ideally, should
be a pure function, meaning that it does not cause any side effects.

Let's try to master this discipline and not alter any variable or object in our
code.

Fill in the code for the function incrementer so it returns the value of the
global variable fixedValue increased by one.
*/

// The global variable
let fixedValue = 4;

function incrementer() {
  return fixedValue+1;
}

var newValue = incrementer();
console.log(fixedValue);