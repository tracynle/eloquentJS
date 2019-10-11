/*
    Chapter 2 p.38
    Write a function that prints out numbers from 1 to 100 with two exceptions:
        1. Numbers that are divisible by 3 will print 'Fizz' and 
            numbers that are divisible by 5 will print 'Buzz'
        2. Numbers that are divisible by BOTH will print 'FizzBuzz'
*/

function fizzBuzz() {
    for (let n = 1; n <= 100; n ++) {
        if (n % 3 == 0 && n % 5 == 0) {
            console.log('FizzBuzz');
        }
        else if (n % 3 == 0) {
            console.log('Fizz');
        }
        else if (n % 5 == 0) {
            console.log('Buzz');
        }
        else {
            console.log(n);
        }
    };
};