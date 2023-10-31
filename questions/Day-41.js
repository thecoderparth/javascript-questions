// Code with Parth

let user = { username: 'jsmith' };
const userList = [user];
user = { username: 'mjones' };

console.log(userList);

// 👍A) { username: 'jsmith' }
// 👏B) { username: 'mjones' }
// 💡C) [{}]
// 😄D) [{ username: 'jsmith' }]

// Answer: D

// Explanation: An object user is created with the property username set to 'jsmith'.

// An array userList is initialized with the user object.

// The user variable is reassigned to a new object with the property username set to 'mjones'.
