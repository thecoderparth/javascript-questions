// Code with Parth

class Cat {
  constructor(name) {
    this.name = name;
  }
}

Cat.prototype.meow = function() {
  console.log(`Meow I am ${this.name}`);
};

const kitty = new Cat('Whiskers');

kitty.meow();

delete Cat.prototype.meow;

kitty.meow();

// 👍A) Meow I am Whiskers" and "Meow I am Whiskers"
// 👏B) "Meow I am Whiskers" and "TypeError: kitty.meow is not a function"
// 💡C) "Meow I am Whiskers" and "undefined"
// 😄D) "TypeError: kitty.meow is not a function" and "TypeError: kitty.meow is not a function"

// Answer: B

// Explanation: There is a Cat class that has a constructor and a prototype method meow. A kitty object is created.

// kitty.meow() is called, and it logs "Meow I am Whiskers" because the meow method is accessible via the prototype.

// delete Cat.prototype.meow is called, which deletes the meow method from the Cat prototype.

// When you try to call kitty.meow() again, it throws a TypeError because the meow method has been deleted from the prototype, and kitty no longer has access to it.