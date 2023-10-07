function getDataType(...values) {
  console.log(typeof values);
}

getDataType('apple', 'banana', 'cherry');    

// 👍A) "string"
// 👏B) "array"
// 💡C) "object"
// 😄D) "NaN"

// Answer: C

// Explanation: The typeof operator applied to values returns "object", which is the type of an array in JavaScript.