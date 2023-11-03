// Code with Parth

console.log(['apple', 2, 'banana'].map(item => {
  if (typeof item === 'number') return;
  return item.toUpperCase();
}));


// 👍A) ['APPLE', undefined, 'BANANA']
// 👏B) ['APPLE', null, 'BANANA']
// 💡C) ['APPLE', empty, 'BANANA']
// 😄D) [3 x empty]

// Answer: A

// Explanation: The map method is used on an array ['apple', 2, 'banana'].

// The callback function item checks if the type of each element is a number. If it is, it returns undefined. If not, it converts the item to uppercase.

// For the element 'apple', it is not a number, so it is converted to uppercase.

// For the element 2, it is a number, so the callback function returns undefined.

// For the element 'banana', it is not a number, so it is converted to uppercase.
