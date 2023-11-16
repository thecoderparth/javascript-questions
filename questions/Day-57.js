// Code with Parth

const chair = { color: 'blue', type: 'armchair' };

Object.seal(chair);

const furniture = chair;
furniture.color = 'red';

console.log(furniture);

// 👍A) { color: 'red', type: 'armchair' }
// 👏B) { color: 'blue', type: 'armchair' }
// 💡C) { color: 'red' }
// 😄D) { color: 'blue' }

// Answer: C

// Explanation: There is an object chair with properties color and type.

// Object.seal is used to prevent adding or deleting properties from the chair object, but it allows modifying existing properties.

// furniture is assigned the same reference as chair, so both variables point to the same object.

// An attempt is made to change the color property of the furniture object.

// To achieve the desired output, you should use console.log(furniture.color), which will log the modified color property. The correct answer is Option C: { color: 'red' }.