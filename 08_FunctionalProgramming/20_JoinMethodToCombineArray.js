// Combine an Array into a String Using the join Method
/*
The join method is used to join the elements of an array together to create a
string. It takes an argument for the delimiter that is used to separate the
array elements in the string.

Here's an example:

const arr = ["Hello", "World"]; const str = arr.join(" "); str would have a
value of the string Hello World.
*/

function sentensify(str) {
    var result = str.split(/\W/).join(" ");
    return result;
}

sentensify("May-the-force-be-with-you");