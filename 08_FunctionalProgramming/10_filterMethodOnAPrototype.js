// Implement the filter Method on a Prototype

/*
Q

Write your own Array.prototype.myFilter(), which should behave exactly like
Array.prototype.filter(). You should not use the built-in filter method. The
Array instance can be accessed in the myFilter method using this.
*/

Array.prototype.myFilter = function(callback) {
    const newArray = [];
    
    for(let i =0; i <this.length;i++)
    {
        if(Boolean(callback(this[i],i,this)) === true)
        {
            newArray.push(this[i]);
        }
    }
    return newArray;
};

console.log([23, 65, 98, 5, 13].myFilter(item => item % 2));