// Code with Parth

const car = {
  brand: 'Toyota',
  model: 'Camry',
};

for (const prop in car) {
  console.log(prop);
}

// 👍A) { brand: 'Toyota' }, { model: 'Camry' }
// 👏B) "brand", "model"
// 💡C) "Toyota", "Camry"
// 😄D) ["brand", "Toyota"], ["model", "Camry"]

// Answer: B

// Explanation: There is an object car with properties brand and model.

// A for...in loop is used to iterate over the properties of the car object.

// The loop variable prop iterates over the property keys of the object, so it logs the property names.