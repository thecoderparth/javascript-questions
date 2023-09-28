class Animal {
  static sound() {
    return 'Generic animal sound';
  }

  constructor({ name = 'Unknown' } = {}) {
    this.name = name;
  }
}

const lion = new Animal({ name: 'Simba' });
console.log(lion.sound());

// 👍A) 'Generic animal sound'
// 👏B) 'Simba'
// 💡C) 'Unknown'     
// 😄D) TypeError

// Answer: D

// Explanation: We have a class Animal with a static method sound(). Static methods are called on the class itself, not on instances of the class.

// We create an instance of the Animal class called lion with the name 'Simba'. This works as expected, and lion has a name property with the value 'Simba'.

// Then, we attempt to call lion.sound(). However, since sound() is a static method, it should be called on the class itself, not on an instance. When we try to call lion.sound(), it results in a TypeError because lion is an instance, and instances do not have access to static methods.