// Remove Elements from an Array Using slice Instead of splice
/*
A common pattern while working with arrays is when you want to remove items and
keep the rest of the array. JavaScript offers the splice method for this, which
takes arguments for the index of where to start removing items, then the number
of items to remove. If the second argument is not provided, the default is to
remove items through the end. However, the splice method mutates the original
array it is called on. Here's an example:

const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1); 

Here splice returns the string London and deletes it from
the cities array. cities will have the value 

["Chicago", "Delhi", "Islamabad","Berlin"].
*/

function nonMutatingSplice(cities) {

    return cities.slice(0,3);
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);