// Code with Parth

function* counter(x) {
  yield x;
  yield x + 1;
}

const count = counter(5);

console.log(count.next().value);
console.log(count.next().value);

// 👍A) [5, 6], [6, 7]
// 👏B) 6, 7
// 💡C) 5, 6
// 😄D) [5, 6] and [6, 7]

// Answer: C

// Explanation: We have a generator function counter that yields the current value and the value incremented by 1.

// We initialize a generator count with an initial value of 5.

// We use count.next().value to retrieve the next value in the generator.