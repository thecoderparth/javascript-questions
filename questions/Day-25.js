// Code with Parth

const obj = {};
const keyA = { name: 'Alice' };
const keyB = { name: 'Bob' };

obj[keyA] = 'Hello, Alice';
obj[keyB] = 'Hello, Bob';

console.log(obj[keyA]);

// 👍A) 'Hello, Alice'
// 👏B) 'Hello, Bob'
// 💡C) undefined
// 😄D) ReferenceError

// Answer: B

// Explanation: We have an object obj.

// We define two objects keyA and keyB with properties name set to different values.

// We use these objects keyA and keyB as keys to set properties in the obj object.

// When using objects as keys in JavaScript objects, the objects are implicitly converted to strings (via their toString() method) before being used as keys. In this case, both keyA and keyB will be converted to the same string representation because their properties are not considered when converting to a string.

// So, effectively, we are setting the same property in obj twice, and the second assignment (obj[keyB] = 'Hello, Bob') overwrites the first one (obj[keyA]).

// When we access obj[keyA], it will return the value 'Hello, Bob' because it has been overwritten.