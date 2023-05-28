/*
Question 
Return an array consisting of the largest number from each provided
sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access
each member with array syntax arr[i].
*/

function largestOfFour(arr) {
    var resultArray = [];
    
    for(var i =0; i< arr[0].length; i ++){

        var highestNumberInTheArray = arr[i][0];

            for(var j = 0; j <4;j++){
                var targetNumber = arr[i][j];  
                if(targetNumber > highestNumberInTheArray)
                {
                    highestNumberInTheArray = targetNumber;
                }     
            }
        resultArray.push(highestNumberInTheArray);
    }
    return resultArray;
}

var solution = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(solution)