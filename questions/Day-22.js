// Code with Parth

const person = { name: 'Alice', age: 30, name: 'Bob' };
console.log(person);
                                       
// 👍A) { name: "Alice", age: 30 }
// 👏B) { age: 30, name: "Bob" }
// 💡C) { name: "Bob", age: 30 }
// 😄D) SyntaxError

// Answer: C

// Explanation: We define an object person with properties name and age.
// The name property is defined twice, with values 'Alice' and 'Bob'.
// In JavaScript, when an object literal has multiple properties with the same name, the last one defined takes precedence. Therefore, 'Bob' overwrites the previous value 'Alice' for the name property.