/*
Question 

Return the length of the longest word in the provided sentence.

Your response should be a number.

*/

function findLongestWordLength(str) {
    var splitedString = str.split(" ");
    
    var result = splitedString[0].length;
    for(var i = 0; i < splitedString.length;i++){
        if(result < splitedString[i].length)
        {
            result =splitedString[i].length; 
        }
    }
    return result;
}

let solution = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(solution);