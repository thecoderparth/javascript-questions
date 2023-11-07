// Code with Parth

(() => {
  let a = (b = 5);
})();

console.log(typeof a);
console.log(typeof b);

// 👍A) "number" "number"
// 👏B) "undefined" "number"
// 💡C) "number" "undefined"
// 😄D) "undefined" "undefined"

// Answer: B

// Explanation: There's a self-invoking arrow function (() => { ... }) that runs immediately.

// Inside this function, two variables are declared using the let keyword: a and b.

// a is declared as a separate variable, while b is declared without the let keyword, making it implicitly global.

// Since a and b are declared within the scope of the arrow function, they are local variables within that function.

// After the arrow function is executed, a goes out of scope and is not accessible outside of the function, resulting in a typeof a of "undefined."

// However, since b was declared without the let keyword and becomes implicitly global, it remains in scope outside the function, resulting in a typeof b of "number."