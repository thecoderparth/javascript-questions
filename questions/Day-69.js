// Code with Parth

const message = `${'Coding ' || 'Decoding '}is fun!
You should${'' || `n't`} underestimate the power of JavaScript!`;


// 👍A) Coding is fun! You shouldn't underestimate the power of JavaScript!
// 👏B) Decoding is fun! You should see a therapist after so much JavaScript lol
// 💡C) Coding is fun! You should see a therapist after so much JavaScript lol
// 😄D) Decoding is fun! You shouldn't underestimate the power of JavaScript!

// Answer: A

// Explanation: There is a template literal (output or message) using the logical OR (||) operator.

// The template literal includes conditional expressions ([] && 'Im' or '' || 'n't') based on truthy or falsy values.