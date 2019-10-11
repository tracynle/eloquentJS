/* 
    Chapter 2 p.37
    Write a loop that makes 7 calls to console.log to output into a triangle
    using the character '#'
*/

function loopTriangle() {
    for (let line = '#'; line.length < 8; line += '#') {
        console.log(line);
    };
};