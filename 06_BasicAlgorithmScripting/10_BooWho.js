/*
Question

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function booWho(bool) {

    if(typeof bool == "boolean")
        bool = true;
    
    else
        bool = false;
    return bool;
}

var solution = booWho(null);
console.log(solution);