// Code with Parth

<div onclick="console.log('Outer div')">
  <div onclick="console.log('Inner div')">
    <button onclick="console.log('Button')">
      Click!
    </button>
  </div>
</div>

// 👍A) Outer div Inner div Button
// 👏B) Button
// 💡C) Button Inner div Outer div
// 😄D) An array of all nested elements

// Answer: C

// Explanation: Clicking the "Button" triggers its own onclick handler, which logs "Button" to the console.

// The click event continues to propagate up to the inner div, which triggers its onclick handler, logging "Inner div" to the console.

// Finally, the event reaches the outer div, and its onclick handler is executed, logging "Outer div" to the console.