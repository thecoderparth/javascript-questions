// Code with Parth

function errorFunction() {
  throw 'An error occurred!';
}

function handleErrors() {
  try {
    const errorMessage = errorFunction();
    console.log('Success:', errorMessage);
  } catch (error) {
    console.error('Error:', error);
  }
}

handleErrors();

// 👍A) Success: An error occurred!
// 👏B) Error: undefined
// 💡C) SyntaxError: can only throw Error objects
// 😄D) Error: An error occurred!

// Answer: D

// Explanation: The errorFunction function throws the string 'An error occurred!'.

// The handleErrors function calls errorFunction and tries to catch any errors that occur.

// Inside the catch block, it logs the error message.

// So, the correct answer is Option D: Error: An error occurred!. The throw statement in errorFunction throws the string as an error, and it's caught and logged in the catch block of handleErrors