// Return a Sorted Array Without Changing the Original Array
/*
A side effect of the sort method is that it changes the order of the elements in
the original array. In other words, it mutates the array in place. One way to
avoid this is to first concatenate an empty array to the one being sorted
(remember that slice and concat return a new array), then run the sort method.
*/

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {

    const copiedArray = [...arr];
        copiedArray.sort(function(a,b) {
        return a - b;
    });

    return copiedArray;
}

var result = nonMutatingSort(globalArray);
console.log("Global array " + globalArray);
console.log("Ascending order "+ result);