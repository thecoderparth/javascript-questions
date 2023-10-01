function Animal(name, species) {
  this.name = name;
  this.species = species;
}

const cat = new Animal('Whiskers', 'Cat');
Animal.getDescription = function() {
  return `Name: ${this.name}, Species: ${this.species}`;
};

console.log(cat.getDescription());

// 👍A) TypeError
// 👏B) SyntaxError
// 💡C) Name: Whiskers, Species: Cat   
// 😄D) undefined undefined

// Answer: A

// Explanation: In this code, we define a constructor function Animal that takes name and species as parameters and sets them as properties of the created object.

// We create an instance of Animal called cat with the name 'Whiskers' and species 'Cat'.

// Then, we attempt to add a getDescription method to the Animal function constructor after creating the cat instance. However, this is not the correct way to add a method to all instances created from the constructor.

// When we later call cat.getDescription(), a TypeError occurs because the getDescription method is not defined on the cat object, and it's not a prototype method either.