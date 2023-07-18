// Make a Person
/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take
an argument must accept only one argument and it has to be a string. These
methods must be the only available means of interacting with the object.
*/

const Person = function(firstAndLast) {
    var firstNameHolder = null;
    var lastNameHolder = null;
    this.getFirstName = function(){
        if(firstNameHolder === null) return firstAndLast.split(" ")[0];
        else
        {
            var tempFirstName = firstNameHolder;
            firstNameHolder = null;
            return tempFirstName;
        } 
    }
    this.getLastName = function(){
        if(lastNameHolder === null) return firstAndLast.split(" ")[1];
        else
        {
            var temp = lastNameHolder;
            lastNameHolder = null;
            return temp;
        }
    }
    this.getFullName = function() {
        return this.getFirstName() + " "+ this.getLastName();
    };
    this.setFirstName = function(first) {
        firstNameHolder = first;
    };
    this.setLastName = function(last) {
        lastNameHolder = last;
    };
    this.setFullName = function(firstAndLast) {
        var wholeName = firstAndLast.split(" ");
        firstNameHolder = wholeName[0];
        lastNameHolder = wholeName[1];
    };
};

const bob = new Person('Bob Ross');
var res =bob.getFullName();
console.log(res);