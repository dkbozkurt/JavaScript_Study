/*
Question

Remove all falsy values from an array. Return a new array; do not mutate the
original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
    var resultArray = [];
    for(let i=0;i < arr.length;i++ ){
        if(arr[i]) resultArray.push(arr[i]);
    }
    return resultArray;
}

var solution = bouncer([7, "ate", "", false, 9]);
console.log(solution);