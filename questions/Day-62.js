// Code with Parth

var mood = '😊';

setTimeout(() => {
  const mood = '😄';
  const info = {
    mood: '😁',
    getMood() {
      return this.mood;
    },
  };
  console.log(info.getMood());
  console.log(info.getMood.call(this));
}, 0);

// 👍A) undefined 😊
// 👏B) 😄 😊
// 💡C) 😁 undefined
// 😄D) 😊 😁

// Answer: C

// Explanation: There is a setTimeout function that executes after a delay of 0 milliseconds.

// Inside the setTimeout callback, there is an object info with a property mood and a method getMood that returns the value of this.mood.

// In the original code:

// The data object has a property status with the value '🥑'.

// The getStatus method is defined to return this.status.

// When calling data.getStatus(), it returns '🥑' because this.status inside the method refers to the status property of the data object.

// When calling data.getStatus.call(this), it returns '😎' because this.status outside the method refers to the outer status variable.

// In the similar question:

// The info object has a property mood with the value '😁'.

// The getMood method is defined to return this.mood.

// When calling info.getMood(), it returns '😁' because this.mood inside the method refers to the mood property of the info object.

// When calling info.getMood.call(this), it returns 'undefined' 