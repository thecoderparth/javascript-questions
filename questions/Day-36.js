// Code with Parth

console.log(!!undefined);
console.log(!!'Hello');
console.log(!!0);

// 👍A) false true false
// 👏B) false false true
// 💡C) false true true
// 😄D) true true false

// Answer: A

// Explanation: The double negation (!!) is used to convert values to their boolean equivalents.
// !!undefined; - undefined is converted to false, and then the !! negates it back to false.

// !!'Hello'; - A non-empty string 'Hello' is converted to true, and then the  !! negates it back to true.

// !!0; - The number 0 is converted to false, and then the !! negates it back to false.