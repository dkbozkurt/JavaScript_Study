// Add Key-Value Pairs to JavaScript Objects
/*
At their most basic, objects are just collections of key-value pairs. In other words, 
they are pieces of data (values) mapped to unique identifiers called properties (keys). 
Take a look at an example:

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
The above code defines a Tekken video game character object called tekkenCharacter. 
It has three properties, each of which map to a specific value. If you want to add 
an additional property, such as "origin", it can be done by assigning origin to 
the object:

tekkenCharacter.origin = 'South Korea';
This uses dot notation. If you were to observe the tekkenCharacter object, it 
will now include the origin property. Hwoarang also had distinct orange hair. 
You can add this property with bracket notation by doing:

tekkenCharacter['hair color'] = 'dyed orange';
Bracket notation is required if your property has a space in it or if you want 
to use a variable to name the property. In the above case, the property is 
enclosed in quotes to denote it as a string and will be added exactly as shown. 
Without quotes, it will be evaluated as a variable and the name of the property 
will be whatever value the variable is. Here's an example with a variable:

const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
After adding all the examples, the object will look like this:

{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
*/

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

foods.bananas = 13;
foods['grapes'] = 35;
var cilek = 'strawberries';
foods[cilek] = 27;

console.log(foods);

// Modify an Object Nested Within an Object
/*
Now let's take a look at a slightly more complex object. Object properties can 
be nested to an arbitrary depth, and their values can be any type of data supported 
by JavaScript, including arrays and even other objects. Consider the following:

let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
nestedObject has three properties: id (value is a number), date (value is a string), 
and data (value is an object with its nested structure). While structures can quickly 
become complex, we can still use the same notations to access the information we need. 
To assign the value 10 to the busy property of the nested onlineStatus object, we use 
dot notation to reference the property:

nestedObject.data.onlineStatus.busy = 10;
*/
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

userActivity.data.online = 45;

console.log(userActivity);

// Access Property Names with Bracket Notation
/*
n the first object challenge we mentioned the use of bracket notation as a way to access 
property values using the evaluation of a variable. For instance, imagine that our foods 
object is being used in a program for a supermarket cash register. We have some function
 that sets the selectedFood and we want to check our foods object for the presence of 
 that food. This might look like:

let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
This code will evaluate the value stored in the selectedFood variable and return the 
value of that key in the foods object, or undefined if it is not present. Bracket 
notation is very useful because sometimes object properties are not known before runtime 
or we need to access them in a more dynamic way.
*/

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    var currentValueOfTheScannedItem;

    currentValueOfTheScannedItem = foods[scannedItem];
    return currentValueOfTheScannedItem;
}

console.log(checkInventory("apples"));

// Use the delete Keyword to Remove Object Properties
/*
Let's revisit our foods object example one last time. If we wanted to remove the apples 
key, we can remove it by using the delete keyword like this:

delete foods.apples;

*/
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);

// Check if an Object has a Property
/*
JavaScript provides us with two different ways to do this. One uses the hasOwnProperty() 
method and the other uses the in keyword. If we have an object users with a property of 
Alan, we could check for its presence in either of the following ways:

users.hasOwnProperty('Alan');
'Alan' in users;

Both of these would return true.
*/

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    return ['Alan','Jeff','Sarah','Ryan'].every(name => userObj.hasOwnProperty(name));
}

console.log(isEveryoneHere(users));

// Iterate Through the Keys of an Object with a for...in Statement
/*
Iterate Through the Keys of an Object with a for...in Statement
Sometimes you need to iterate through all the keys within an object. You can use a for...in 
loop to do this. The for...in loop looks like:

const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}
This code logs milk 1 and eggs 12, with each key-value pair on its own line.

We defined the variable food in the loop head and this variable was set to each of the 
object's keys on each iteration, resulting in each food's name being printed to the console.

NOTE: Objects do not maintain an ordering to stored keys like arrays do; thus a key's position 
on an object, or the relative order in which it appears, is irrelevant when referencing or 
accessing that key.
*/

const usersTwo = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    var counter = 0;
    for(const userChild in allUsers){
        if(allUsers[userChild].online === true){
            counter++;
        }
    }

    return counter;
}

console.log(countOnline(usersTwo));

// Generate an Array of All Object Keys with Object.keys()
/*
We can also generate an array which contains all the keys stored in an object with the 
Object.keys() method. This method takes an object as the argument and returns an array 
of strings representing each property in the object. Again, there will be no specific 
order to the entries in the array.
*/

let usersThree = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
};

function getArrayOfUsers(obj) {
    return Object.keys(obj);
}

console.log(getArrayOfUsers(usersThree));

// Modify an Array Stored in an Object
/*
Question:

Take a look at the object we've provided in the code editor. The user object contains three 
keys. The data key contains five keys, one of which contains an array of friends. From this, 
you can see how flexible objects are as data structures. We've started writing a function 
addFriend. Finish writing it so that it takes a user object and adds the name of the friend 
argument to the array stored in user.data.friends and returns that array.
*/

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
};

function addFriend(userObj, friend) {
    let friends;
    userObj.data.friends.push(friend);
    friends = userObj.data.friends;
    return friends;
}

console.log(addFriend(user, 'Pete'));