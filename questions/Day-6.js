let x = { message: 'Hi!' };
let y;

y = x;
x.message = 'Hola';
console.log(y.message);

// 👍A) 'Hola'
// 👏B) 'Hi'
// 💡C) undefined     
// 😄D) ReferenceError

// Answer: A

// Explanation: In this code, we first declare an object x with a property message set to 'Hi!'. Then, we declare a variable y and assign it the value of x. Both x and y now reference the same object in memory.

// Next, we change the value of the message property of the object through x to 'Hola'. Since y references the same object, when we access y.message, it returns 'Hola', and that's why the output is 'Hola'.