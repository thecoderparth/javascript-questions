// Code with Parth

console.log(Number(42) === Number(42));
console.log(Boolean(true) === Boolean(true));
console.log(Symbol('bar') === Symbol('bar'));

// 👍A) true, true, true
// 👏B) true, false, true
// 💡C) true, true, false
// 😄D) false, false, false

// Answer: C

// Explanation: The first line compares Number(42) to Number(42). Both sides evaluate to the same numeric value, so the comparison results in true.

// The second line compares Boolean(true) to Boolean(true). Both sides evaluate to true, so the comparison results in true.

// The third line compares two distinct Symbol values, 'bar' and 'bar'. Symbols are always unique, so even if they have the same description, they are not equal. Therefore, the comparison results in false.