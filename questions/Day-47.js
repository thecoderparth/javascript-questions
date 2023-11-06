// Code with Parth

function Fruit() {
  this.name = 'Apple';
  return { name: 'Banana' };
}

const myFruit = new Fruit();
console.log(myFruit.name);

// 👍A) "Apple"
// 👏B) "Banana"
// 💡C) ReferenceError
// 😄D) TypeError

// Answer: B

// Explanation: There is a constructor function Fruit that sets a property name to 'Apple'.

// Inside the constructor, it returns an object with name set to 'Banana'.

// A new instance myFruit of the Fruit constructor is created using the new keyword.

// When you access myFruit.name, it refers to the name property of the object returned from the constructor, which is 'Banana'.