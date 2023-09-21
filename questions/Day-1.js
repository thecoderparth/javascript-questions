function sayHello() {
  console.log(userName);
  console.log(userAge);
  var userName = 'John';
  let userAge = 30;
}

sayHello();

// 👍A) "John" and ReferenceError
// 👏B) undefined and ReferenceError
// 💡C) ReferenceError and TypeError
// 😄D) undefined and undefined     
  
// Answer: B

// Explanation: In JavaScript, variables declared with var are hoisted (moved to the top of the function) and initialized with undefined, while variables declared with let and const are not initialized until their declaration statements are reached. Therefore, userName is undefined when the console.log is called, and userAge results in a ReferenceError.

