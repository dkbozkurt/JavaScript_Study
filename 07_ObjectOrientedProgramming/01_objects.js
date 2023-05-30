// Create a Basic JavaScript Object
/*
Objects in JavaScript are used to model real-world objects, giving them
properties and behavior just like their real-world counterparts. Here's an
example using these concepts to create a duck object:

let duck = { 
    name: "Aflac", 
    numLegs: 2
};

This duck object has two property/value pairs: a name of Aflac and a numLegs of
2.

*/

let dog = {
    name: "berkin",
    numLegs: 4
};

// Use Dot Notation to Access the Properties of an Object

console.log("Dog name: " + dog.name + "\nNumber of legs: " + dog.numLegs);

// Create a Method on an Object
/*
Objects can have a special type of property, called a method.

Methods are properties that are functions. This adds different behavior to an
object. Here is the duck example with a method:

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName(); 

The example adds the sayName method, which is a function that
returns a sentence giving the name of the duck. Notice that the method accessed
the name property in the return statement using duck.name. The next challenge
will cover another way to do this.

Using the dog object, give it a method called sayLegs. The method should return
the sentence This dog has 4 legs.
*/

let dogTwo = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() { return "This dog has " + dogTwo.numLegs + " legs.";}
};

dogTwo.sayLegs();

// Make Code More Reusable with the this Keyword
/*
The last challenge introduced a method to the duck object. It used duck.name dot
notation to access the value for the name property within the return statement:

sayName: function() {return "The name of this duck is " + duck.name + ".";}

While this is a valid way to access the object's property, there is a pitfall
here. If the variable name changes, any code referencing the original name would
need to be updated as well. In a short object definition, it isn't a problem,
but if an object has many references to its properties there is a greater chance
for error.

A way to avoid these issues is with the this keyword:

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};

this is a deep topic, and the above example is only one way to use it. In the
current context, this refers to the object that the method is associated with:
duck. If the object's name is changed to mallard, it is not necessary to find
all the references to duck in the code. It makes the code reusable and easier to
read.
*/

let dogTree = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dogTree.sayLegs();

// Define a Constructor Function
/*
Constructors are functions that create new objects. They define properties and
behaviors that will belong to the new object. Think of them as a blueprint for
the creation of new objects.

Here is an example of a constructor:

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

This constructor defines a Bird object with properties name, color, and numLegs
set to Albert, blue, and 2, respectively. Constructors follow a few conventions:

* Constructors are defined with a capitalized name to distinguish them from other
functions that are not constructors.
* Constructors use the keyword this to set properties of the object they will
create. Inside the constructor, this refers to the new object it will create.
* Constructors define properties and behaviors instead of returning a value as
other functions might.
*/

function Dog(){
    this.name = "berkin";
    this.color = "brown";
    this.numLegs = 3;
}

// Use a Constructor to Create Objects
/*
Here's the Bird constructor from the previous challenge:

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
NOTE: this inside the constructor always refers to the object being created.

Notice that the new operator is used when calling a constructor. This tells
JavaScript to create a new instance of Bird called blueBird. Without the new
operator, this inside the constructor would not point to the newly created
object, giving unexpected results. Now blueBird has all the properties defined
inside the Bird constructor:

blueBird.name;
blueBird.color;
blueBird.numLegs;

Just like any other object, its properties can be accessed and modified:

blueBird.name = 'Elvira';
blueBird.name;
*/

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}

let hound = new Dog();
hound.name = "Berkinv2";
console.log(hound.name);

// Extend Constructors to Receive Arguments
/*
To more easily create different Bird objects, you can design your Bird
constructor to accept parameters:

function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

Then pass in the values as arguments to define each unique bird into the Bird
constructor: let cardinal = new Bird("Bruce", "red"); This gives a new instance
of Bird with name and color properties set to Bruce and red, respectively. The
numLegs property is still set to 2. The cardinal has these properties:

cardinal.name
cardinal.color
cardinal.numLegs

The constructor is more flexible. It's now possible to define the properties for
each Bird at the time it is created, which is one way that JavaScript
constructors are so useful. They group objects together based on shared
characteristics and behavior and define a blueprint that automates their
creation.
*/

function Dog(name,color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Berkin","brown");

// Verify an Object's Constructor with instanceof
/*
Anytime a constructor function creates a new object, that object is said to be
an instance of its constructor. JavaScript gives a convenient way to verify this
with the instanceof operator. instanceof allows you to compare an object to a
constructor, returning true or false based on whether or not that object was
created with the constructor. Here's an example:

let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
This instanceof method would return true.

If an object is created without using a constructor, instanceof will verify that
it is not an instance of that constructor:

let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
This instanceof method would return false.
*/

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(3);

console.log(myHouse instanceof House);

// Understand Own Properties
/*
In the following example, the Bird constructor defines two properties: name and
numLegs:

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

name and numLegs are called own properties, because they are defined directly on
the instance object. That means that duck and canary each has its own separate
copy of these properties. In fact every instance of Bird will have its own copy
of these properties. The following code adds all of the own properties of duck
to the array ownProps:

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
The console would display the value ["name", "numLegs"].
*/

