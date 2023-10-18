// Code with Parth

<div onclick="console.log('Outer div')">
  <p onclick="console.log('Paragraph')">
    Click here!
  </p>
</div>

// 👍A) Paragraph Outer div
// 👏B) Outer div Paragraph
// 💡C) Paragraph
// 😄D) Outer div

// Answer: A

// Explanation: There are two nested elements: an outer div and a p (paragraph) element.
// Each element has an onclick attribute that logs a message when clicked.
// When you click on the paragraph, the click event propagates up through the DOM hierarchy. This means that all the click handlers of the parent elements are also triggered in the order of the DOM tree hierarchy.

// Clicking the paragraph triggers its own onclick handler, which logs "Paragraph."

// The click event continues to propagate up to the outer div, which triggers its onclick handler, logging "Outer div."