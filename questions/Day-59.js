// Code with Parth

const myColors = ['🔴', '🟢', '🔵', '🟡'];

for (let color in myColors) {
  console.log(color);
}

for (let color of myColors) {
  console.log(color);
}

// 👍A) 0 1 2 3 and 🔴 🟢 🔵 🟡
// 👏B) '🔴' '🟢' '🔵' '🟡' and '🔴' '🟢' '🔵' '🟡'
// 💡C) 0 1 2 3 and '🔴' '🟢' '🔵' '🟡'
// 😄D) '🔴' '🟢' '🔵' '🟡' and 🔴 🟢 🔵 🟡

// Answer: A

// Explanation: The for...in loop iterates over the property names (or keys) of an object. When used with arrays, it will iterate over the indices of the array as strings.

// The for...of loop is used to iterate over the values of iterable objects like arrays.

// In the provided code:

// The first for...in loop iterates over the array myColors and logs the index values as strings.

// The second for...of loop iterates over the array myColors and logs the actual emoji values.