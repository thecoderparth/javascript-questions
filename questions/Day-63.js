// Code with Parth

const user = {
  username: 'JohnDoe',
  age: 25,
};

let country = user.country;
country = 'Canada';

console.log(user);

// 👍A) { username: 'JohnDoe', age: 25 }
// 👏B) { username: 'JohnDoe', age: 25, country: 'Canada' }
// 💡C) { country: 'Canada' }
// 😄D) undefined

// Answer: A

// Explanation: There is an object (person or user) with properties (name, age, username, age).

// A variable (city or country) is declared and initialized with the value of a property (person.city or user.country) from the object. However, since neither person nor user initially has a city or country property, the value of undefined is assigned to the variable.

// The variable (city or country) is then reassigned to a new value ('Amsterdam' or 'Canada').

// Finally, the object (person or user) is logged to the console.

// In the original code:

// person has properties name and age, but no city property.

// The city variable is reassigned to 'Amsterdam', but it doesn't affect the person object.

// In the similar question:

// user has properties username and age, but no country property.

// The country variable is reassigned to 'Canada', but it doesn't affect the user object.