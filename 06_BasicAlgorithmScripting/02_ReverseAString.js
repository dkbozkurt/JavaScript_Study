/*
Question 

Reverse the provided string and return the reversed string.
For example, "hello" should become "olleh".
*/

function reverseString(str) {
    var tempString = "";
    for(var i = str.length -1; i >=0; i--){
        tempString += str[i];
    }
    str = tempString;
    return str;
}

var solution = reverseString("hello");
console.log(solution);