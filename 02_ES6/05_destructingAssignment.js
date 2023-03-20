// Use Destructuring Assignment to Extract Values from Objects
/*
Destructuring assignment is special syntax introduced in ES6, for 
neatly assigning values taken directly from an object.

Consider the following ES5 code:

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

name would have a value of the string John Doe, and age would have 
the number 34.

Here's an equivalent assignment statement using the ES6 destructuring 
syntax:

const { name, age } = user;

Again, name would have a value of the string John Doe, and age would
    ave the number 34.

Here, the name and age variables will be created and assigned the 
values of their respective values from the user object. You can see 
how much cleaner this is.

You can extract as many or few values from the object as you want.
*/

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const {today,tomorrow} = HIGH_TEMPERATURES;

// Use Destructuring Assignment to Assign Variables from Objects
/*
Destructuring allows you to assign a new variable name when extracting 
values. You can do this by putting the new name after a colon when 
assigning the value.

Using the same object from the last example:

const user = { name: 'John Doe', age: 34 };

Here's how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user;

You may read it as "get the value of user.name and assign it to a new 
variable named userName" and so on. The value of userName would be the 
string John Doe, and the value of userAge would be the number 34.
*/

const PERSONAL_INFO = {
    skills : "Dogukan",
    occupation : "Bozkurt",
    age : 25
};

const {skills: name, occupation:surname} = PERSONAL_INFO;

// Use Destructuring Assignment to Assign Variables from Nested Objects
/*

*/

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

const {today : { low : lowToday, high : highToday}} = LOCAL_FORECAST;

// Destructuring via rest elements
/*
In some situations involving array destructuring, we might want to 
collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
The console would display the values 1, 2 and [3, 4, 5, 7].

Variables a and b take the first and second values from the array. 
After that, because of the rest syntax presence, arr gets the rest 
of the values in the form of an array. The rest element only works 
correctly as the last variable in the list. As in, you cannot use 
the rest syntax to catch a subarray that leaves out the last element 
of the original array.
*/

function removeFirstTwo (list)
{
    const [a,b,...shorterList] = list;
    return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);