// Code with Parth

const person = { name: 'John', age: 30 };
const numbersSet = new Set([10, 20, 30, 40, 50]);

console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('age'));
console.log(numbersSet.has('10'));
console.log(numbersSet.has(10));

// 👍A) false true false true
// 👏B) false true true true
// 💡C) true true false true
// 😄D) true true true true

// Answer: C

// Explanation: For the person object:

// person.hasOwnProperty('name') checks if the person object has a property named 'name', which it does. So, it returns true.
// person.hasOwnProperty('age') checks if the person object has a property named 'age', which it does. So, it returns true.

// For the numbersSet Set:

// numbersSet.has('10') checks if the Set contains the value '10'. It doesn't because the Set contains the numeric value 10, not the string '10'. So, it returns false.
// numbersSet.has(10) checks if the Set contains the numeric value 10, which it does. So, it returns true.