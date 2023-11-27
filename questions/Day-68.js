// Code with Parth

const greeting = 'Hello';

console.log(greeting());

// 👍A) TypeError: greeting is not a function
// 👏B) Hello
// 💡C) undefined
// 😄D) ReferenceError: greeting is not defined

// Answer: A

// Explanation: There is a variable (name or greeting) assigned a string value.

// The variable is then invoked as if it were a function (name() or greeting()).

// In the original code:

// name is a string, not a function. Attempting to invoke it as a function (name()) results in a TypeError because strings are not callable.
// In the similar question:

// greeting is a string, not a function. Attempting to invoke it as a function (greeting()) will also result in a TypeError.