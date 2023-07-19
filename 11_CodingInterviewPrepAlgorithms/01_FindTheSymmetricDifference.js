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
    var size = args.length;

    if(size <= 1 )
    {
        console.log("Not enough input arguments detected!");
        return;
    }

    var symmetricDiff = args[0];
    
    for(let i = 1; i < size; i ++)
    {
        var baseSet =[... new Set(symmetricDiff)];
        var targetSet = [... new Set(args[i])];

        symmetricDiff = findSymmetricDifference(baseSet,targetSet);
    }

    symmetricDiff.sort();
    
    return symmetricDiff;
}

function findSymmetricDifference(first,second){
    var mergedArray = first.concat(second);
    var uniqueArray = mergedArray.filter((element, index) => mergedArray.indexOf(element) === mergedArray.lastIndexOf(element));
    return uniqueArray;
}

var res = sym([1, 2, 3,3], [5, 2, 1, 4]);
console.log(res);