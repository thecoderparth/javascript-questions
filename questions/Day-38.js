// Code with Parth

console.log([...new Set('Parth')]);

// 👍A) ["P", "a", "r", "t", "h"]
// 👏B) ["Parth"]
// 💡C) [["P", "a", "r", "t", "h"]]
// 😄D) ["P", "a", "r", "t", "h"]

// Answer: A

// Explanation: A string 'Parth' is being converted to a Set using new Set('Parth'). This removes any duplicate characters and keeps only the unique characters.

// The spread operator (...) is used to convert the Set back to an array.