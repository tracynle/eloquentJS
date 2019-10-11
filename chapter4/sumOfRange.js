/*
    Chapter 4 p.78
    The Sum of a Range

    Write a range function that takes two arguments, start and end,
    and returns an array containing all the numbers from start up to 
    (and including) end.
    
    Next, write a sum function that takes an array of numbers and 
    returns the sum of these numbers.
    ** did not get to do bonus
*/

function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i ++) {
        array.push(i);
    };
    return array;
};
console.log(range(3, 10)); // [3, 4, 5, 6, 7, 8, 9, 10]

function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length ; i ++) {
        total += array[i];
    };
    return total;
};

console.log(sum(range(1,10))); // 55

