// Code with Parth

function checkObjects(obj1, obj2 = obj) {
  if (obj1 !== obj2) {
    console.log('Objects are different!');
  } else {
    console.log('Objects are the same!');
  }
}

const obj = { language: 'JavaScript' };

checkObjects(obj);

// 👍A) "Objects are different!"
// 👏B) "Objects are the same!"
// 💡C) ReferenceError
// 😄D) SyntaxError

// Answer: B

// Explanation: A function checkObjects is defined with two parameters, obj1 and obj2. obj2 is assigned a default value of obj.

// The function is called with person as the argument for obj1.

// The function is called with obj as the argument for obj1.

// The comparison obj1 !== obj2 checks if the two objects are same.