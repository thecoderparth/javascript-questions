function multiply(x, y) {
  return x * y;
}

const result = multiply(2, '3');      

// 👍A) NaN
// 👏B) TypeError
// 💡C) "6"
// 😄D) 6

// Answer: D

// Explanation: We have a multiply function that takes two parameters x and y and returns their product.

// We call multiply(2, '3'). In this case, JavaScript converts '3' to the number 3 because the * operator expects numeric operands, and it performs the multiplication.

// Therefore, the result of multiply(2, '3') is 6.