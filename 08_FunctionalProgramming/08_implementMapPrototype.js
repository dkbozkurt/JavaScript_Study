// Implement map on a Prototype
/*
map is a pure function, and its output depends solely on its inputs. Plus, it
takes another function as its argument.

You might learn a lot about the map method if you implement your own version of
it. It is recommended you use a for loop or Array.prototype.forEach().
*/

/*
Q Write your own Array.prototype.myMap(), which should behave exactly like
Array.prototype.map(). You should not use the built-in map method. The Array
instance can be accessed in the myMap method using this.
*/

Array.prototype.myMap = function(callback) {
    const newArray = [];
    for(let i =0;i < this.length;i++){
        newArray.push(callback(this[i],i,this));
    }
    return newArray;
};

console.log([23, 65, 98, 5, 13].myMap(item => item * 2));

console.log(["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase()));

