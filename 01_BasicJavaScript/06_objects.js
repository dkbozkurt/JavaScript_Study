// Build JavaScript Objects
/*
Objects are similar to arrays, except that instead of using indexes to access 
and modify their data, you access the data in objects through what are called 
properties.

const anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
};

However, if your object has any non-string properties, JavaScript will automatically 
typecast them as strings.
*/

const myDog = 
{
    "name" : "Batman",
    legs : 4,
    tails : 1,
    "friends" : ["Superman","Flash"]
}

// Accessing Object Properties with Dot Notation
/*
There are two ways to access the properties of an object: dot notation (.) and 
bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to 
access ahead of time.

const myObj = {
    prop1: "val1",
    prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
prop1val would have a value of the string val1, and prop2val would have a value of the string val2.
*/

const testObj = {
    "hat":"ballcap",
    "shirt":"jersey",
    "shoes":"cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

// Accessing Object Properties with Bracket Notation
/*
The second way to access the properties of an object is bracket notation ([]). If the property of 
the object you are trying to access has a space in its name, you will need to use bracket notation.

testObj["value"];

However, you can still use bracket notation on object properties without spaces.
*/

const myObj = {
    "an entree" : "hamburger",
    "my side":"veggies",
    "the drink":"water"
};

const entreeValue = myObj["an entree"];
const drinkValue = myObj["the drink"];

// Accessing Object Properties with Variables
/*
Another use of bracket notation on objects is to access a property which is stored as the value 
of a variable. This can be very useful for iterating through an object's properties or when 
accessing a lookup table.
*/

const numbersObj = {
    12 : "Namath",
    16 : "Montana",
    19 : "Unitas"
}

const playerNumber = 16;
const player = numbersObj[playerNumber];

// Updating Object Properties
/*
After you've created a JavaScript object, you can update its properties at any time just like 
you would update any other variable. You can use either dot or bracket notation to update.
*/

const myCat = {
    "name" : "Coder",
    "legs" : 4,
    "tails" : 1,
    "friends":["Cat_1","Cat_2"]
}

myCat.name = "Piscass";

// Add New Properties to a JavaScript Object
/*
You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a bark property to ourDog:

ourDog.bark = "bow-wow";
or

ourDog["bark"] = "bow-wow";
Now when we evaluate ourDog.bark, we'll get his bark, bow-wow.
*/

const myFish = {
    "name" : "Orange",
    "legs" : 0,
    "tails" : 1,
}

myFish.age = 3;

// Delete Properties from a JavaScript Object
/*
We can also delete properties from objects like this:

delete ourDog.bark;
*/

delete myFish.legs;

// Testing Objects for Properties
/*
Sometimes it is useful to check if the property of a given object exists or not. We can use the 
.hasOwnProperty(propname) method of objects to determine if that object has the given property 
name. .hasOwnProperty() returns true or false if the property is found or not.

Example 

const myObj = {
    top: "hat",
    bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
The first hasOwnProperty returns true, while the second returns false.
*/

const testObjForClothes = {
    top: "hat",
    bottom: "pants"
};

testObjForClothes.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

// Manipulating Complex Objects
/*
Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one 
way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, 
arrays, functions, and objects.

Here's an example of a complex data structure:

const ourMusic = [
    {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
        "CD", 
        "Cassette", 
        "LP"
    ],
    "gold": true
    }
];

This is an array which contains one object inside. The object has various pieces of metadata about 
an album. It also has a nested formats array. If you want to add more album records, you can do 
this by adding records to the top level array. Objects hold data in a property, which has a key-value 
format. In the example above, "artist": "Daft Punk" is a property that has a key of artist and a value 
of Daft Punk.

Note: You will need to place a comma after every object in the array, unless it is the last object in 
the array.
*/

// Accessing Nested Objects
/*
The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

Here is a nested object:

const ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
    "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
    },
    "bottom drawer": "soda"
    }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
ourStorage.cabinet["top drawer"].folder2 would be the string secrets, and ourStorage.desk.drawer would 
be the string stapler.
*/

const myStorage = {
    "car" : {
        "inside":{
            "glove box" : "maps",
            "passenger seat" : "crumbs"
        },
        "outside" : {
            "trunk" : "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

// Accessing Nested Arrays
/*

*/

const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

// Here secondTree will be "pine".
const secondTree = myPlants[1].list[1];

