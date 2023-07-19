// Find the Symmetric Difference
/*
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of
elements which are in either of the two sets but not in both. For example, for
sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two
elements. So to evaluate an expression involving symmetric differences among
three elements (A △ B △ C), you must complete one operation at a time. Thus, for
sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} =
{1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their
symmetric difference. The returned array must contain only unique values (no
duplicates).
*/

function sym() {
    var args = arguments;
    var final = findSymmetricDifference(arguments[0],arguments[1]);
    
    return final;
}

function findSymmetricDifference(first,second){
    const [ greaterArray, smallerArray ] =  findGreaterArray(first,second);
    var resultArray = greaterArray;

    for(let i =0 ; i < resultArray.length;i++)
    {
        console.log("i " +i);
        if(smallerArray.includes(resultArray[i]))
        {
            resultArray.pop(i);
            i--;
        }
        else{
            resultArray.push(smallerArray[i]);
        }
    }

    return resultArray;
}

function findGreaterArray(first,second)
{
    if(first.length >= second.length)
    {
        return [first,second];
    }
    else
    {
        return [second,first];
    }
}

var res = sym([1, 2, 3], [5, 2, 1, 4],[1,6]);
console.log(res);