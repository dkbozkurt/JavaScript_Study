/*
Question

Repeat a given string str (first argument) for num times (second argument).
Return an empty string if num is not a positive number. For the purpose of this
challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
    var resultString = "";
    if(num <= 0 ) return resultString;

    for(var i = 0; i < num;i++){
        resultString += str;
    }
    return resultString;
}

var solution = repeatStringNumTimes("abc", 3);
console.log(solution);