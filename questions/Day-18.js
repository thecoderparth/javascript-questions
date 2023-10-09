function setGrade() {
  'use strict';
  grade = 'A';
  console.log(grade);
}

setGrade();
                                    
// 👍A) 'A'
// 👏B) undefined
// 💡C) ReferenceError
// 😄D) TypeError

// Answer: C

// Explanation: We have a function setGrade with 'use strict'; enabled. When strict mode is enabled, JavaScript imposes stricter rules and generates more errors for common coding mistakes.

// Inside the function, we attempt to assign a value to a variable called grade without declaring it using var, let, or const. In strict mode, this is not allowed, and it results in a ReferenceError because grade is not defined in the current scope.

// Therefore, calling setGrade() results in a ReferenceError, and nothing is logged to the console.