let count = 5;
console.log(count--);
console.log(--count);
console.log(count);             

// 👍A) 5 3 3
// 👏B) 4 3 2
// 💡C) 5 4 3
// 😄D) 4 4 3
     
// Answer: A

// Explanation: console.log(count--): The postfix decrement (count--) first returns the current value of count, which is 5, and then decrements it by 1. So, it prints 5 to the console, and count becomes 4.

// console.log(--count): The prefix decrement (--count) first decrements the value of count by 1, making it 3, and then returns the new value. So, it prints 3 to the console.

// console.log(count): At this point, count is 3, so it prints 3 to the console.