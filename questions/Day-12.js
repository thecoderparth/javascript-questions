function Animal(name, species) {
  this.name = name;
  this.species = species;
}

const lion = new Animal('Simba', 'Lion');
const tiger = Animal('Tiger', 'Tiger');

console.log(lion);
console.log(tiger);

// 👍A) Animal {name: "Simba", species: "Lion"} and undefined
// 👏B) Animal {name: "Simba", species: "Lion"} and Animal {name: "Tiger", species: "Tiger"}
// 💡C) Animal {name: "Simba", species: "Lion"} and {}
// 😄D) Animal {name: "Simba", species: "Lion"} and ReferenceError

// Answer: A

// Explanation: In this code, we define a constructor function Animal that takes name and species as parameters and sets them as properties of the created object.

// We create an instance of Animal called lion with the name 'Simba' and species 'Lion'. This works as expected, and lion is an instance of the Animal constructor.

// Then, we attempt to create an instance tiger without using the new keyword. When you call Animal('Tiger', 'Tiger') without new, it doesn't create a new object, but instead, it modifies the global object (in the browser, this would be window). This is why lion is created as expected, but tiger is undefined.