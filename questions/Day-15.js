// Code with Parth

function displayInfo(name, age, city) {
  console.log(name);
  console.log(age);
  console.log(city);
}

const userName = 'Alice';
const userAge = 30;
const userCity = 'New York';

displayInfo`${userName} is ${userAge} years old and lives in ${userCity}`;

// 👍A) "Alice" 30 "New York"
// 👏B) [ '', ' is ', ' years old and lives in ', '' ] Alice 30
// 💡C) "Alice" [30] "New York"
// 😄D) SyntaxError
     
// Answer: B
