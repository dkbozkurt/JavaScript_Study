// Sorted Union

/*
Write a function that takes two or more arrays and returns a new array of unique
values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their
original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array
should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(arr) {
    const args = [...arguments];
    const result=[];
    for(let i =0; i< args.length;i++)
    {
        var targetArrayPiece = args[i];
        for(let j= 0; j< targetArrayPiece.length;j++){
            var targetNumber = targetArrayPiece[j];
            if(!result.includes(targetNumber))
            {
                result.push(targetNumber);
            }
        }
    }    
    return result;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Solution 2 
/*
function uniteUnique() {
  return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
*/

// Solution 3
/*
function uniteUnique(...arr) {
  return [...new Set(arr.flat())];
}

// Or as an arrow function
const uniteUnique = (...arr) => [...new Set(arr.flat())];
*/