let x = 5;
let y = new Number(5);
let z = 5;

console.log(x == y);
console.log(x === y);
console.log(y === z);

// 👍A)  true false true
// 👏B) false false true
// 💡C) true false false
// 😄D) false true true

// Answer: C

// Explanation: 1) x == y: This compares the values of x and y. x is a primitive number, and y is a Number object. JavaScript automatically converts the Number object to a primitive value when comparing, so 5 == 5 is true.

// 2) x === y: This compares both the values and the types of x and y. x is a primitive number, and y is an object. They are of different types, so 5 === new Number(5) is false.

// 3) y === z: This compares y and z, which are both of the same value 5. However, y is a Number object, and z is a primitive number. They are of different types, so new Number(5) === 5 is false.