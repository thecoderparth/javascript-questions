// Code with Parth

const country = 'INDIA';
population = 331;

console.log(delete country);
console.log(delete population);

// 👍A) true and true
// 👏B) false and true
// 💡C) true and false
// 😄D) false and false

// Answer: A

// Explanation: There is a constant country with the value 'INDIA', and a variable population is assigned a value of 331.

// delete country is called, attempting to delete the country constant. This operation returns false because you can't delete constants in JavaScript.

// delete population is called, successfully deleting the global variable population, and it returns true.