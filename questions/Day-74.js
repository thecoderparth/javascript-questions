// Code with Parth

const config = {
  apple: true,
  banana: false,
  orange: true,
};

const fruits = ['apple', 'banana', 'orange'];

console.log(config.fruits[0]);

// 👍A) true
// 👏B) false 
// 💡C) undefined
// 😄D) TypeError

// Answer: C

// Explanation: An object colorConfig or config is defined with boolean properties.
// An array colors or fruits is defined with string values.

// colorConfig.colors[1] attempts to access the property with the key 'colors' on the colorConfig object. However, there is no property named 'colors' in the colorConfig object.
// In the similar question:

// config.fruits[0] attempts to access the property with the key 'fruits' on the config object. However, there is no property named 'fruits' in the config object.