// Modify Array Data With Indexes
/*
!!! Unlike strings, the entries of arrays are mutable and can be changed freely, 
even if the array was declared with const.

const ourArray = [50, 40, 30];
ourArray[0] = 15;
ourArray now has the value [15, 40, 30].
*/

const myArray = [18, 64, 99];
myArray[0] = 45;

console.log("Array[0] = " + myArray[0]);


// Manipulate Arrays With push Method
/*
An easy way to append data to the end of an array is via the push() function.

.push() takes one or more parameters and "pushes" them onto the end of the array.
*/

const arr1 = [1,2,3];
arr1.push(4);


const arr2 = [["John",23], ["cat",2]];
arr2.push(["dog",3]);

console.log("arr2[2] = " + arr2[2]);

// Manipulate Arrays With pop Method
/*
.pop() is used to pop a value off of the end of an array. 
We can store this popped off value by assigning it to a variable. In other words, 
.pop() removes the last element from an array and returns that element.
*/

const threeArr = [1,4,6];
const oneDown = threeArr.pop();

console.log("oneDown : " + oneDown);
console.log("threeArr : " + threeArr);

// Manipulate Arrays With shift Method
/*
pop() always removes the last element of an array. What if you want to remove the first?
That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.
*/

const ourArray = ["Stimpson","J",["cat"]];
const removedElementFromArray = ourArray.shift();

console.log("outArray : " + ourArray);
console.log("removedElement : " + removedElementFromArray);

// Manipulate Arrays With unshift Method
/*
.unshift() works exactly like .push(), but instead of adding the element at the end of the array, 
unshift() adds the element at the beginning of the array.
*/

const unshiftArrayExample = [["John",23],["dog",3]];
unshiftArrayExample.shift();
unshiftArrayExample.unshift(["Paul",35]);

console.log("unshiftArrayExample : " + unshiftArrayExample[0]);