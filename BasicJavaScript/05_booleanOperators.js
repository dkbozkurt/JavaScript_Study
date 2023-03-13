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
    if (val == '12') {
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);

// Comparison with the Strict Equality Operator
/*
Strict equality (===) is the counterpart to the equality operator (==). However, 
unlike the equality operator, which attempts to convert both values being compared 
to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, 
and the strict equality operator will return false.

Examples

3 ===  3  // true
3 === '3' // false
In the second example, 3 is a Number type and '3' is a String type.
*/

function testStrictEqual(val) {
    // Will return Not Equal
    // if(val === '10')  return "Equal";
    
    // Will return Equal
    if(val === 10)  return "Equal";
    
    return "Not Equal";
}

console.log(testStrictEqual(10));

// Comparison with the Inequality Operator
/*
The inequality operator (!=) is the opposite of the equality operator. 
It means not equal and returns false where equality would return true and vice versa. 
Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
*/

// Comparison with the Strict Inequality Operator
/*
The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
*/

// Note : <, >, <= , >=, &&, || working as expected.
