// Steamroller
/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
    const flattenedArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
        flattenedArray.push(...steamrollArray(arr[i]));
        } else {
        flattenedArray.push(arr[i]);
        }
    }
    return flattenedArray;
};

steamrollArray([1, [2], [3, [[4]]]]);

// Solution 2 (flat is not allowed for this question)
/*
function steamrollArray(arr) {
    return arr.flat(Infinity);
}

steamrollArray([1, [2], [3, [[4]]]]);
*/


// Solution 3
/*
function steamrollArray(arr, flatArr = []) {
  const elem = arr.pop();
  return elem
    ? !Array.isArray(elem)
      ? steamrollArray(arr, [elem, ...flatArr])
      : steamrollArray(arr.concat(elem), flatArr)
    : flatArr;
}
*/