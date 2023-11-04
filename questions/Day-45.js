// Code with Parth

function updateInfo(member, city) {
  member.age = 30;
  city = 'New York';
}

const user = { age: 25 };
const currentCity = 'San Francisco';

updateInfo(user, currentCity);

console.log(user, currentCity);

// 👍A) { age: 30 }, "San Francisco"
// 👏B) { age: 25 }, "New York"
// 💡C) { age: 30 }, "New York"
// 😄D) { age: 25 }, "San Francisco"

// Answer: A

// Explanation: There is a function updateInfo that takes two parameters: member and city.

// Inside the function, member.age is set to 30, and city is reassigned to 'New York'.

// An object user is initialized with the property age set to 25.

// A variable currentCity is assigned the string 'San Francisco'.

// The updateInfo function is called with user and currentCity as arguments.

// After the function call, user still has the property age set to 30, but currentCity remains 'San Francisco'.

// So, the correct answer is Option A: { age: 30 }, "San Francisco". The user object is modified inside the function, but currentCity remains unchanged.




