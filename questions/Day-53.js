// Code with Parth

const user = {
  username: 'johndoe',
  age: 30,
  email: 'john@example.com',
};

const userInfo = JSON.stringify(user, ['age', 'email']);
console.log(userInfo);

// 👍A) {"age":30,"email":"john@example.com"}
// 👏B) {"username":"johndoe","age":30,"email":"john@example.com"}
// 💡C) {30:"age","john@example.com":"email"}
// 😄D) {"age":30,"email":"john@example.com","username":"johndoe"}

// Answer: A

// Explanation: There is an object user with properties username, age, and email.

// JSON.stringify is used to convert the user object into a JSON string, including only the properties specified in the second argument of JSON.stringify.

// The properties included are 'age' and 'email'.

// console.log(userInfo) logs the JSON string representation of the user object with only the 'age' and 'email' properties included.