// Code with Parth

const myPromise = new Promise(resolve => resolve('Promise'));

console.log(myPromise);

// 👍A) "Promise"
// 👏B) Promise {<pending>: "Promise"}
// 💡C) Promise {<fulfilled>: "Promise"}
// 😄D) Error

// Answer: C

// Explanation: A Promise is created using Promise.resolve, and a resolved value is provided.

// The promise is resolved with the value 5.
// In the similar question:

// The promise is resolved with the value "Promise".