/* Chapter 5 p. 83
    This section goes over different approaches to writing for loops 
    by abstracting it using forEach() function rather than using the traditional 
    for loop approach. Plain functions are a good way to build abstractions but 
    they can fall short and leave potential bugs.
*/


/* 1. Writing for loops this way would have potential bugs because we may have accidentally
reused variables, have mispellings, and variable confusions.
This forEach function will print out its element from the array:
*/
function forEach(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    };
};

// 2. Rather than logging elements, this function takes in an action as a function value 
function forEach(array, action) {
    for (let i = 0; i < array.length; i++) {
        action(array[i]);
    };
};
forEach([1,2,3,4,5], console.log);

// 3. But you don't pass a predefined function to forEach but create a function value on the spot
let numbers = [1,2,3,4,5], sum = 0;

// uses the forEach method here: 
forEach(numbers, function(number) {
    sum += number;
});

console.log(sum);

// 4. Two traversing for loops 
function gatherCorrelations(journal) {
    let phis = {};
    // iterates through the journal entries 
    for (let entry = 0; entry < journal.length; i++) {
        let events = journal[entry].events;
        // iterates the events from the journal array
        for (let i = 0; i < events.length; i++) {
            let event = events[i];
            if (!(event in phis)) {
                phis[event] = phi(tableFor(event, journal));
            };
        };
    };
    return phi;
};

// 5. Using forEach makes the code shorter and cleaner without the use of
// two for loops

function gatherCorrelations(journal) {
    let phis = {};
    journal.forEach(function(entry) {
        entry.events.forEach(function(event) {
            if (!(event in phis)) {
                phis[event] = phi(tableFor(event, journal));
            }
        });
    });
    return phis;
};
