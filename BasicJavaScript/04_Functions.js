// Write Reusable JavaScript with Functions
/*
function functionName() {
    console.log("Hello World");
}
You can call or invoke this function by using its name followed by parentheses, 
like this: functionName(); Each time the function is called it will print out 
the message Hello World on the dev console.
*/

function reusableHiWorldFunction() {
    console.log("Hi World");
}

reusableHiWorldFunction();

// Passing Values to Functions with Arguments
/*
arameters are variables that act as placeholders for the values that are to be 
input to a function when it is called. When a function is defined, it is typically 
defined along with one or more parameters. The actual values that are input (or "passed") 
into a function when it is called are known as arguments.
*/

function functionWithArguments(param1,param2)
{
    console.log(param1,param2);
    // Also can bu used as : console.log(param1 + " " + param2);
}

functionWithArguments("Dogukan","Bozkurt");

// Return a Value from a Function with Return
/*
We can pass values into a function with arguments. You can use a return statement to send 
a value back out of a function.
*/

function timesFive(num)
{
    return num * 5;
}

var answer = timesFive(5);
console.log("Answer : " + answer);


// Local Scope and Functions
/*
Variables which are declared within a function, as well as the function parameters, 
have local scope. That means they are only visible within that function.

Here is a function myTest with a local variable called loc.

function myTest() {
    const loc = "foo";
    console.log(loc);
}

myTest();
console.log(loc);

The myTest() function call will display the string foo in the console. 
The console.log(loc) line (outside of the myTest function) will throw an error, 
as loc is not defined outside of the function.
*/

// Global vs. Local Scope in Functions
/*
It is possible to have both local and global variables with the same name. 
When you do this, the local variable takes precedence over the global variable.

const someVar = "Hat";

function myFun() {
    const someVar = "Head";
    return someVar;
}
The function myFun will return the string Head because the local version of the variable is present.
*/

const outerWear = "T-Shirt";

function myOutfit(){
    const outerWear = "Sweater";
    return outerWear;
}

console.log(myOutfit());

// Understanding Undefined Value returned from a Function
/*
A function can include the return statement but it does not have to. In the case that the 
function doesn't have a return statement, when you call it, the function processes the inner 
code but the returned value is undefined.

let sum = 0;

function addSum(num) {
    sum = sum + num;
}

addSum(3);
addSum is a function without a return statement. The function will change the global sum 
variable but the returned value of the function is undefined.
*/

let sum = 0;

function addThree() {
    sum = sum + 3;
}

function addFive()
{
    sum += 5;
}

addThree();
addFive();

// Comparison with the Equality Operator
/*
In order for JavaScript to compare two different data types (for example, numbers and strings), 
it must convert one type to another. This is known as Type Coercion. Once it does, however, 
it can compare terms as follows:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
*/

function testEqual(val) {
    if (val == "12") {
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);
