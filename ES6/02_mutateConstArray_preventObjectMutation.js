// Mutate an Array Declared with const
/*
If you are unfamiliar with const, check out this challenge about 
the const keyword.

The const declaration has many use cases in modern JavaScript.

Some developers prefer to assign all their variables using const 
by default, unless they know they will need to reassign the value. 
Only in that case, they use let.

However, it is important to understand that objects (including arrays 
    and functions) assigned to a variable using const are still mutable. 
    Using the const declaration only prevents reassignment of the variable 
    identifier.

const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);

s = [1, 2, 3] will result in an error. After commenting out that 
line, the console.log will display the value [5, 6, 45].

As you can see, you can mutate the object [5, 6, 7] itself and the variable 
s will still point to the altered array [5, 6, 45]. Like all arrays, the 
array elements in s are mutable, but because const was used, you cannot use 
the variable identifier s to point to a different array using the assignment 
operator.
*/

// Change the array to [2, 5, 7] using various element assignments.

const s =[5,7,2];
function editInPlace()
{
    s.pop();
    s.unshift(2);
}

editInPlace();


// Prevent Object Mutation
/*
const declaration alone doesn't really protect your data from mutation. 
To ensure your data doesn't change, JavaScript provides a function Object.
freeze to prevent data mutation.

Any attempt at changing the object will be rejected, with an error thrown 
if the script is running in strict mode.

let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 

The obj.review and obj.newProp assignments will result in errors, because 
our editor runs in strict mode by default, and the console will display the value { name: "FreeCodeCamp", review: "Awesome" }.
*/