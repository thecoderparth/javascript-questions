// Code with Parth

const colors = ['red', 'blue', 'green'];
colors[5] = 'yellow';
console.log(colors);

// 👍A) ["red", "blue", "green", <2 empty items>, "yellow"]
// 👏B) ["red", "blue", "green", "yellow"]
// 💡C) ["red", "blue", "green", <3 empty items>, "yellow"]
// 😄D) SyntaxError

// Answer: A

// Explanation: We have an array colors with three elements: 'red', 'blue', and 'green'.

// We assign a value to an index that is not within the current bounds of the array. In this case, we set colors[5] to 'yellow'. This extends the length of the array and creates empty (undefined) items between the last defined index (2) and the new index (5).

// When you log the colors array, JavaScript represents the empty items as <2 empty items>, indicating that there are two empty (undefined) items between index 2 and index 5. The rest of the defined elements ('red', 'blue', 'green', and 'yellow') are displayed in the array.