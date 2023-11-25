// Code with Parth

function greetUser() {
  return 'Hello, user!';
}

const sayHi = () => 'Hi there!';

console.log(greetUser.prototype);
console.log(sayHi.prototype);

// 👍A) undefined
// 👏B) {} undefined
// 💡C) Object
// 😄D) null

// Answer: B

// Explanation: There is a function declaration (giveLydiaPizza or greetUser) and a function expression (giveLydiaChocolate or sayHi).

// The console.log() statement is used to print the prototype property of each function.
