// Code with Parth

String.prototype.sayHello = () => {
  return 'Hello, World!';
};

const greeting = 'Hi';

console.log(greeting.sayHello());
                                       
// 👍A) "Hello, World!"
// 👏B) TypeError: not a function
// 💡C) SyntaxError
// 😄D) undefined

// Answer: A

// Explanation: We extend the String.prototype object by adding a new method called sayHello. This method returns the string "Hello, World!".

// We create a variable greeting with the value 'Hi'.

// We then call the sayHello method on the greeting variable using greeting.sayHello(). Since greeting is a string, it inherits the sayHello method from the String.prototype.

// The sayHello method returns "Hello, World!", and that is the value that gets returned when we call greeting.sayHello().