// Code with Parth

function calculateSum() {
  return (function() {
    return 5 + 3;
  })();
}

console.log(typeof calculateSum());

// 👍A) "object"
// 👏B) "number"
// 💡C) "function"
// 😄D) "undefined"

// Answer: B

// Explanation: There is a function calculateSum that returns the result of an immediately invoked function expression (IIFE). The IIFE returns the sum of 5 and 3, which is 8.

// When you call calculateSum(), it executes the IIFE and returns 8.

// The typeof operator is used to check the data type of the result of calculateSum().

// Since calculateSum() returns 8, the typeof operation applied to it will return "number."