function compareValues(value1, value2) {
  if (value1 === { name: 'John' }) {
    console.log('Value1 is John');
  } else if (value1 == { name: 'John' }) {
    console.log('Value1 is still John.');
  } else {
    console.log('Value1 is not John.');
  }

  if (value2 === value2) {
    console.log('Value2 is itself');
  } else {
    console.log('Value2 is not itself');
  }
}

const obj = { name: 'John' };

compareValues(obj, obj);

// 👍A) Value1 is John and Value2 is itself
// 👏B) Value1 is still John. and Value2 is itself
// 💡C) Value1 is not John. and Value2 is not itself
// 😄D) Value1 is not John. and Value2 is itself
  
// Answer: D

// Explanation: We have a compareValues function that takes two arguments: value1 and value2.

// Inside the function, we have conditional statements to compare value1 and value2.

// For value1, we have two conditions:

// The first condition value1 === { name: 'John' } compares value1 with a new object { name: 'John' }. This comparison using === checks for strict equality and returns false because the objects have different references in memory.
// The second condition value1 == { name: 'John' } compares value1 with a new object using loose equality (==). This comparison also returns false because loose equality doesn't consider the object properties.
// For value2, we compare it with itself using ===, which returns true because value2 refers to the same object in memory.

// Therefore, the console.log statements print:

// "Value1 is not John." because none of the conditions for value1 are met.
// "Value2 is itself" because value2 is strictly equal to itself.