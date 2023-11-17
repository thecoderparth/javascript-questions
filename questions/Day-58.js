// Code with Parth

const { animal: myAnimal } = { animal: 'Elephant' };

console.log(animal);

// 👍A) Elephant
// 👏B) 'animal'
// 💡C) undefined
// 😄D) ReferenceError: animal is not defined

// Answer: D

// Explanation: There is an object that has a property animal with the value 'Elephant'.

// Using destructuring, the animal property is being assigned to a new variable called myAnimal.

// After the destructuring, there is an attempt to log the value of the animal variable, which is not defined anywhere in the code.