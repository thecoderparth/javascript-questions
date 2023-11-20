// Code with Parth

function greet(name) {
  return `Greetings, ${name}`;
}

console.log(greet());

// 👍A) Greetings, undefined
// 👏B) Greetings, null
// 💡C) Hi there, undefined
// 😄D) Hi there, null

// Answer: A

// Explanation: There is a function that takes a name parameter and returns a greeting string with the provided name.

// The function sayHi is called without providing any arguments, which means name is undefined.

// The function then returns a greeting with "Hi there, undefined".

// In the similar question:

// The function greet is called without providing any arguments, which also means name is undefined.

// The function then returns a greeting with "Greetings, undefined".