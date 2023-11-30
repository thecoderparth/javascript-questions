// Code with Parth

const mySet = new Set();

mySet.add(2);
mySet.add('GPT');
mySet.add({ language: 'JavaScript' });

for (let element of mySet) {
  console.log(element * 2);
}

// 👍A) 4, NaN, NaN
// 👏B) 4, GPT2, [object Object]2
// 💡C) 4, GPTNaN, [object Object]NaN
// 😄D) "22", GPT2, [object Object]2

// Answer: A

// Explanation: A Set is created, and various values (number, string, object) are added to it.

// A for...of loop is used to iterate over the elements of the set.
