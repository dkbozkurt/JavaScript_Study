/*
Question 

Check if a string (first argument, str) ends with the given target string
(second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced
in ES2015. But for the purpose of this challenge, we would like you to use one
of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {

    for(let i =0 ; i < str.length;i ++)
    {
        var tempStr = str.slice(i);

        if(tempStr.length !== target.length) continue;
        
        var isSame = true;
        for(var j = 0; j < tempStr.length;j++){
            if(tempStr[j] != target[j]){
            isSame = false;
            break;
            }   
        }

        if(isSame) return true;
    }

    return false;
    // Another solution (ES2015+)  
    // if(str.endsWith(target)) return true; 
    // return false;
}

var solution =confirmEnding("Bastian", "n");
console.log(solution);