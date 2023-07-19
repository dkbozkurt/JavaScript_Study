// Inventory Update
/*
Compare and update the inventory stored in a 2D array against a second 2D array
of a fresh delivery. Update the current existing inventory item quantities (in
arr1). If an item cannot be found, add the new item and quantity into the
inventory array. The returned inventory array should be in alphabetical order by
item.
*/

function updateInventory(arr1, arr2) {

    var obj1 = convert2DArrayToObject(arr1,1,0);
    var obj2 = convert2DArrayToObject(arr2,1,0);

    let [greaterObj, smallerObj] = findGreaterObject(obj1,obj2);

    var resultObj = AddItems(greaterObj,smallerObj);

    var resultArray = convertObjectTo2DArray(resultObj);

    return resultArray;
}

function AddItems(obj1,obj2)
{
    var addedObj = obj1;
    var keysObj2 = Object.keys(obj2);

    for(let i =0; i< keysObj2.length;i++)
    {
        if(addedObj.hasOwnProperty(keysObj2[i]))
        {
            addedObj[keysObj2[i]] += obj2[keysObj2[i]];
        }
        else
        {
            addedObj[keysObj2[i]] = obj2[keysObj2[i]];
        }
    }

    addedObj = sortObject(addedObj);

    return addedObj;
}

function convert2DArrayToObject(arr,keyIndex = 0,valueIndex = 1)
{
    let obj = {};

    arr.forEach(element => {
        let key = element[keyIndex];
        let value = element[valueIndex];

        obj[key] = value;
    });

    return obj;
}

function convertObjectTo2DArray(obj)
{
    let arr = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const pair = [obj[key], key];
            arr.push(pair);
        }
    }

    return arr;
}


function findGreaterObject(first,second)
{
    if(Object.keys(first).length >= Object.keys(second).length )
    {
        return [first,second];
    }
    else
    {
        return [second,first];
    }
}

function sortObject(obj){
    var sortedKeys = Object.keys(obj).sort();

    var sortedObj = {};
    for (const key of sortedKeys) {
        sortedObj[key] = obj[key];
    }

    return sortedObj;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]
];

var res = updateInventory(curInv, newInv);
console.log(res);
