// Arguments Optional
/*
Create a function that sums two arguments together. If only one argument is
provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return
a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2); 
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether() {
    var args = [...arguments];
    var result = 0;
    for(let i =0; i <args.length;i++)
    {
        if(!Number.isInteger(args[i])) return undefined;

        if(args.length === 1)
        {
            return (element) => {
                if(!Number.isInteger(element)) return undefined;
                return element + args[i];
            }
        }
        result += args[i];
    }
    return result;
}
addTogether(5)(7);

// Solution 2 
/*
function addTogether() {
  const [first, second] = arguments;

  if (typeof (first) === "number") {
    if (typeof (second) === "number") return first + second;
    if (arguments.length === 1) return (second) => addTogether(first, second);
  }
}
*/
