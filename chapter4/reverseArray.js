/*
    Chapter 4 p. 78
    Do not use the 'reverse' method for this exercise.

    Write two functions called 'reverseArray' and 'reverseArrayInPlace'.
        1. 'reverseArray' takes an array as an argument and produces a new array 
        that has the same elements in the inverse order.
        
        2. 'reverseArrayInPlace' does what the 'reverse' method does by modifying 
        the array given as an argument in order to reverse its elements.

    Which variant do you expect to be useful in more situations? 
    Which is more effcient?

*/

function reverseArray(array) {
    let newArray = [];

    for (let i = array.length - 1; i >= 0; i --) {
        // push the parameter's (array) elements into the 'newArray' 
        newArray.push(array[i]);
    }
    return newArray; 
}
reverseArray([1,2,3,4]); // [4, 3, 2, 1] ==> newArray

function reverseArrayInPlace(array) {
    let newArray = [];
    
   for (let i = array.length - 1; i >= 0; i--) {
       newArray.push(array[i]);
   };

   for (let i = 0; i < array.length; i ++) {
       // Save newArray that is reversed from previous for loop to the array that is passed in
       array[i] = newArray[i]; 
   }
   return newArray;
};
// pass in an array that can be referenced
const a = [1,2,3,4,5];
reverseArrayInPlace(a); // returns [5,4,3,2,1]

// Solution from text:
function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length/2); i ++) {
        let oldElement = array[i];
        array[i] = array[array.length -1 - i];
        array[array.length - 1 - i] = oldElement;
    }
    return array;
}