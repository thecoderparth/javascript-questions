// Code with Parth

const result = parseInt('2022 is the year', 10);

console.log(result);

// 👍A) 2022
// 👏B) "2022"
// 💡C) 10
// 😄D) NaN

// Answer: A

// Explanation: The parseInt function attempts to parse an integer from the string '2022 is the year'.

// The function starts parsing from the beginning of the string and stops when it encounters a non-digit character.

// In this case, it stops at the first non-digit character, which is the space character. The parsed integer is 10.