const num = -5;
const bool = !num;
const str = String(bool);                  

console.log(num);
console.log(bool);
console.log(str);        

// 👍A) -5, false, "false"
// 👏B) -5, true, "true"
// 💡C) 5, true, "true"
// 😄D) 5, false, "false"

// Answer: B

// Explanation: In JavaScript, -5 is considered a "truthy" value when used in a boolean context. The ! operator negates it, making it false. The String function converts false to the string "false."
  