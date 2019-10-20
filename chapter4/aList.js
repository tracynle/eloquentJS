/* 
    Chapter 4 p. 78
    1. Write a function 'arrayToList' that builds up a data structure like the 
    previous one when given an array [1,2,3]

    Given arguments should then return this:

    let list = {
        value: 1,
        rest: {
            value: 2,
            rest: {
                value: 3,
                rest: null
            }
        }
    };
    2. Write a function 'listToArray' that produces an array from a list
    3. Write a helper function 'prepend' which takes an element and a list
        and creates a new list that adds the element to the front of the input list
    4. Write a function 'nth', which takes a list and a number and returns the element 
        at the given position in the list, or undefined when there is no such element.
*/

function arrayToList(array) {
    let list = null;

    for (let i = array.length -1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        }
    };
    return list;
};

// this function turns an array into a list
function listToArray(list) {
    
}

