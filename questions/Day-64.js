// Code with Parth

function checkHeight(height) {
  if (height < 150) {
    const msg = "Sorry, you're too short.";
  } else {
    const msg = "Yay! You're tall enough!";
  }
  return msg;
}

console.log(checkHeight(160));

// 👍A) "Yay! You're tall enough!"
// 👏B) "Sorry, you're too short."
// 💡C) undefined
// 😄D) ReferenceError: msg is not defined 

// Answer: D

// Explanation: There is a function (checkAge or checkHeight) that takes a parameter (age or height).

// Inside the function, there is an if-else statement to check a condition (age < 18 or height < 150).

// Inside each block of the if-else statement, there is a const variable (message or msg) assigned a string value.

// Finally, the function returns the value of the variable.

// In the original code:

// The checkAge function returns the value of the message variable. However, the message variable is block-scoped within the if and else blocks, so it's not accessible outside of them.

// Attempting to return message outside of the blocks will result in a ReferenceError because message is not defined in the outer scope.

// In the similar question:

// The checkHeight function returns the value of the msg variable. Similarly, msg is block-scoped within the if and else blocks.

// Attempting to return msg outside of the blocks will result in a ReferenceError because msg is not defined in the outer scope.