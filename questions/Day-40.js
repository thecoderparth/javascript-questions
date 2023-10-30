// Code with Parth

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, 'apple');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, 'banana');
});

Promise.race([promise1, promise2]).then(
  result => console.log(result)
);

// 👍A) "apple"
// 👏B) "banana"
// 💡C) "banana" "apple"
// 😄D) "apple" "banana"

// Answer: B

// Explanation: Two promises, promise1 and promise2, are created. Each promise resolves after a specified timeout with different values.

// The Promise.race method is used to race between these two promises. It will resolve or reject as soon as one of the promises resolves or rejects.

// Since promise2 resolves before promise1, the value "banana" will be logged when the first promise resolves.