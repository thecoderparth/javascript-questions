// Code with Parth

const data = {
  [Symbol('x')]: 'y',
};

console.log(data);
console.log(Object.getOwnPropertySymbols(data));

// 👍A) { Symbol('x'): 'y' } and [ Symbol(x) ]
// 👏B) {} (an empty object) and [ Symbol('x') ]
// 💡C) { Symbol('x'): 'y' } and [ 'x' ]
// 😄D) {} (an empty object) and [] (an empty array)

// Answer: A

// Explanation: data has a symbol property created using the computed property syntax with [Symbol('x')].

// The first console.log(data) statement prints { [Symbol('x')]: 'y' }.

// The second console.log(Object.getOwnPropertySymbols(data)) statement prints [ Symbol('x') ] because Object.getOwnPropertySymbols() returns an array of all symbol properties of the object.