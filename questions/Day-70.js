// Code with Parth

const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
  myPromise().then(res => console.log(res));
  console.log('first');
}

async function secondFunction() {
  console.log(await myPromise());
  console.log('second');
}

firstFunction();
secondFunction();

// 👍A) I have resolved!, second and I have resolved!, second
// 👏B) I have resolved!, second and first, I have resolved!
// 💡C) first, I have resolved! and I have resolved!, second
// 😄D) I have resolved!, second and fourth, I have resolved!

// Answer: C

// Explanation: With a promise, we basically say I want to execute this function, but I'll put it aside for now while it's running since this might take a while. Only when a certain value is resolved (or rejected), and when the call stack is empty, I want to use this value.

// We can get this value with both .then and the await keyword in an async function. Although we can get a promise's value with both .then and await, they work a bit differently.

// In the firstFunction, we (sort of) put the myPromise function aside while it was running, but continued running the other code, which is console.log('second') in this case. Then, the function resolved with the string I have resolved, which then got logged after it saw that the callstack was empty.

// With the await keyword in secondFunction, we literally pause the execution of an async function until the value has been resolved before moving to the next line.

// This means that it waited for the myPromise to resolve with the value I have resolved, and only once that happened, we moved to the next line: second got logged.