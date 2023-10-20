// Code with Parth

const car = { brand: 'Toyota' };

function showModel(model) {
  return `${this.brand} makes the ${model} model.`;
}

console.log(showModel.call(car, 'Camry'));
console.log(showModel.bind(car, 'Corolla')());

// 👍A) "Toyota makes the Camry model." and a function
// 👏B) "Toyota makes the Camry model." and "Toyota makes the Corolla model."
// 💡C) "Toyota makes the Corolla model." and a function
// 😄D) a function and a function

// Answer: B

// Explanation: We have an object car with a property brand.

// There is a function showModel that takes a model parameter and uses this.brand to form a sentence.

// We use the call method to invoke showModel with the car object as the context and the argument 'Camry'. This logs "Toyota makes the Camry model."

// We use the bind method to create a new function with the context set to car and the argument 'Corolla'. When we log this new function, it logs "Toyota makes the Corolla model."