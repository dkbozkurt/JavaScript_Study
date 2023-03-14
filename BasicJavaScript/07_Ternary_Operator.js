// Use Multiple Conditional (Ternary) Operators
/*
The following function uses if, else if, and else statements to check multiple conditions:

function findGreaterOrEqual(a, b) {
    if (a === b) {
        return "a and b are equal";
    }
    else if (a > b) {
        return "a is greater";
    }
    else {
        return "b is greater";
    }
}
The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
        : (a > b) ? "a is greater" 
        : "b is greater";
}
It is considered best practice to format multiple conditional operators such that each 
condition is on a separate line, as shown above. Using multiple conditional operators 
without proper indentation may make your code hard to read. For example:

function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
*/

function checkSign(num)
{
    return num === 0 ? "zero" : num > 0 ? "positive" : "negative";
}

checkSign(10);

// Use Recursion to Create a Range of Numbers
/*
Question 
We have defined a function named rangeOfNumbers with two parameters. The function should 
return an array of integers which begins with a number represented by the startNum parameter 
and ends with a number represented by the endNum parameter. The starting number will always 
be less than or equal to the ending number. Your function must use recursion by calling itself 
and not use loops of any kind. It should also work for cases where both startNum and endNum 
are the same.
*/

function rangeOfNumbers(startNum,endNum)
{
    return startNum > endNum ? [] : [startNum,...rangeOfNumbers(startNum+1,endNum)]
};
