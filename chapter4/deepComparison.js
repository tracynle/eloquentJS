/* 
    Write a function, deepEqual:
    1. It takes two values 
    2. Returns 'true' only if they are the same value 
    or are objects with the same properties whose values are also equal when 
    compared with a recursive call to deepEqual
    Hint: Use the strict operator to compare two things by identity or use the 
    typeof operator
        - if it returns 'object' for both values, use the strict operator
*/
// My solution:
function deepEqual(val1, val2) {
    if (typeof(val1) === typeof(val2)) {
        return true;
    }
    else {
        return false;
    }
}

deepEqual(1,1); // true

// Textbook solution:

function deepEqual2(a, b) {
    // 1.
    if (a === b) return true;

    // 2.
    if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
    
    // 3.
    var propsInA = 0, propsInB = 0;

    for (var prop in a)
        propsInA += 1;

    for (var prop in b) {
        propsInB += 1;
        if (!(prop in a) || !deepEqual(a[prop], b[prop]))
        return false;
    }

    return propsInA == propsInB;
}