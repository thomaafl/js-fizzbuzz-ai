/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
// TODO: Write your function in this file

// TODO: Change undefined below to the name of your function
function fizzBuzz(lower, upper) {
    let result = [];
    for (let i = lower; i <= upper; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}

module.exports = fizzBuzz;