// Explore Difference Between The var and let Keywords

/*
var camper = "James";
var camper = "David";
console.log(camper);

In the code above, the camper variable is originally declared as James, 
and is then overridden to be David. The console then displays the string David.

So unlike var, when you use let, a variable with the same name can only be declared once.
*/

var catName = "Oliver";
var catName = "David";

console.log("Cat name: " + catName);

let dogName = "Bob";
// Gives an error.
// let dogName = "Charles";

console.log("Dog name: " + dogName);