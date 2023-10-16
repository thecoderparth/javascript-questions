// Code with Parth

const fn1 = () => console.log('One');
const fn2 = () => setTimeout(() => console.log('Two'));
const fn3 = () => console.log('Three');

fn2();
fn1();
fn3();

// 👍A) One Two Three
// 👏B) One Three Two
// 💡C) Two One Three
// 😄D) Two Three One

// Answer: B

// Explanation: We have three functions: fn1, fn2, and fn3.

// fn1 and fn3 are regular functions that log messages immediately when called, while fn2 uses setTimeout to log a message asynchronously.

// We call fn2() first. The setTimeout inside fn2 schedules the execution of its callback function (logging 'Two') to occur after a short delay. However, it doesn't block the rest of the code from executing.

// Next, we call fn1(), which logs 'One' immediately.

// Finally, we call fn3(), which logs 'Three' immediately.

// As a result, the messages are logged in the order they are called, but 'Two' is logged asynchronously after a short delay due to the setTimeout in fn2.