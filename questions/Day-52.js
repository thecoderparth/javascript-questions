// Code with Parth

const product = { name: 'iPhone' };

Object.defineProperty(product, 'price', { value: 999 });

console.log(product);
console.log(Object.keys(product));

// 👍A) { name: 'iPhone', price: 999 } and ['name', 'price']
// 👏B) { name: 'iPhone' } and ['name']
// 💡C) { name: 'iPhone' } and ['name', 'price']
// 😄D) { name: 'iPhone', price: 999 } and ['name']

// Answer: B

// Explanation: There is an object product with the property name set to 'iPhone'.

// Object.defineProperty is used to add a property price to the product object with a value of 999.

// console.log(product) logs the product object, which includes both name and price properties.

// console.log(Object.keys(product)) logs the keys of the product object, which returns an array containing only the keys of the product object, which is just ['name'].