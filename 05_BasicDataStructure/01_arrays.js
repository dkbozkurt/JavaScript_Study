// Add Items to an Array with push() and unshift()
/*
The push() method adds elements to the end of an array, and unshift() adds elements to 
the beginning. Consider the following:

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
romanNumerals would have the value ['XIX', 'XX', 'XXI', 'XXII'].

romanNumerals.push(twentyThree);
romanNumerals would have the value ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']. Notice that 
we can also pass variables, which allows us even greater flexibility in dynamically 
modifying our array's data.
*/

function mixedNumbers(arr) {

    arr.unshift('I',2,'three');
    arr.push(7,'VIII',9);  
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

// Remove Items from an Array with pop() and shift()
/*
pop() removes an element from the end of an array, while shift() removes an element 
from the beginning. The key difference between pop() and shift() and their cousins 
push() and unshift(), is that neither method takes parameters, and each only allows 
an array to be modified by a single element at a time.

Let's take a look:

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
greetings would have the value ['whats up?', 'hello'].

greetings.shift();
greetings would have the value ['hello'].

We can also return the value of the removed element with either method like this:

let popped = greetings.pop();
greetings would have the value [], and popped would have the value hello.
*/

function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

// Remove Items Using splice()

/*
splice() allows us to do just that: remove any number of consecutive elements from 
anywhere in an array.

splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. 
The first two parameters of splice() are integers which represent indexes, or positions, 
of items in the array that splice() is being called upon. And remember, arrays are 
zero-indexed, so to indicate the first element of an array, we would use 0. 
splice()'s first parameter represents the index on the array from which to begin 
removing elements, while the second parameter indicates the number of elements to 
delete. For example:

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
Here we remove 2 elements, beginning with the third element (at index 2). array 
would have the value ['today', 'was', 'great'].

splice() not only modifies the array it's being called on, but it also returns a 
new array containing the value of the removed elements:

let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
newArray has the value ['really', 'happy'].
*/

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0,1);
arr.splice(3); // arr.splice(3,4);
console.log(arr);

// Add Items Using splice()
/*
splice() can take up to three. Well, you can use the third parameter, 
comprised of one or more element(s), to add to the array. This can be incredibly 
useful for quickly switching out an element, or a set of elements, for another.

t numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

The second occurrence of 12 is removed, and we add 13 and 14 at the same index. 
The numbers array would now be [ 10, 11, 12, 13, 14, 15 ].
*/

function htmlColorNames(arr) {
    arr.splice(0,2,'DarkSalmon','BlanchedAlmond');
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// Copy Array Items Using slice()
/*
Rather than modifying an array, slice() copies or extracts a given number of 
elements to a new array, leaving the array it is called upon untouched. slice() 
takes only 2 parameters — the first is the index at which to begin extraction, 
and the second is the index at which to stop extraction (extraction will occur 
up to, but not including the element at this index). Consider this:

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
todaysWeather would have the value ['snow', 'sleet'], while weatherConditions 
would still have ['rain', 'snow', 'sleet', 'hail', 'clear'].

In effect, we have created a new array by extracting elements from an existing 
array.

*/
function forecast(arr) {
    arr = arr.slice(2,4);
    return arr;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// Copy an Array with the Spread Operator
/*
While slice() allows us to be selective about what elements of an array to copy, 
among several other useful tasks, ES6's new spread operator allows us to easily copy 
all of an array's elements, in order, with a simple and highly readable syntax. The 
spread syntax simply looks like this: ...

In practice, we can use the spread operator to copy an array like so:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
thatArray equals [true, true, undefined, false, null]. thisArray remains unchanged 
and thatArray contains the same elements as thisArray.

*/
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
    
    newArr.push([...arr]);
    num--;
    
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));