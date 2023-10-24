// Code with Parth

(() => {
  let a, b;
  try {
    throw new Error();
  } catch (a) {
    (a = 10), (b = 20);
    console.log(a);
  }
  console.log(a);
  console.log(b);
})();

// 👍A) 10 undefined 20
// 👏B) undefined undefined undefined
// 💡C) 10 10 20
// 😄D) 10 undefined undefined

// Answer: A

// Explanation: An immediately invoked function expression (IIFE) is defined.

// Inside the IIFE, there is a try...catch block.

// In the try block, an Error object is thrown.

// In the catch block, there is a local variable a that shadows the outer variable a.

// Inside the catch block, the value of the local a is set to 10, and the value of b is set to 20.

// The first console.log(a) logs the local a, which is 10.

// The second console.log(a) logs the outer a, which is undefined because it was declared outside of the catch block and is shadowed by the local a.

// The third console.log(b) logs the value of the local b, which is 20.