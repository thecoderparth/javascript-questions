// Code with Parth

class Animal {
  constructor(type) {
    this.type = type;
  }
}

const creature = new Animal('Elephant');
console.log(typeof creature);

// 👍A) "object"
// 👏B) "function"
// 💡C) "Animal"
// 😄D) undefined

// Answer: A

// Explanation: There is a class (Person or Animal) with a constructor that takes a parameter (name or type).

// An instance of the class is created (member or creature) using the new keyword and passing an argument to the constructor.

// Finally, the typeof operator is used to determine the type of the instance and is logged to the console.

// In the original code:

// The Person class is used to create an instance named member with the name 'John'.

// The typeof member expression returns "object" because member is an instance of the Person class.

// In the similar question:

// The Animal class is used to create an instance named creature with the type 'Elephant'.

// The typeof creature expression returns "object" because creature is an instance of the Animal class.