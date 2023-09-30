function meow() {
  console.log('Meow!');
}

meow.species = 'cat';
console.log(meow.species);

// 👍A) Nothing, this is totally fine!
// 👏B) SyntaxError. You cannot add properties to a function this way.
// 💡C) 'cat'
// 😄D) ReferenceError

// Answer: C

// Explanation: In this code, we declare a function meow().

// We then add a property species to the meow function, setting it to the string 'cat'.

// Finally, we log the value of meow.species, which will output 'cat'.