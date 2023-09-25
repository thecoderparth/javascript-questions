const fruit = {
  name: 'apple',
};

const color = {
  name: 'red',
  apple: true,                        
};       

// 👍A) color.fruit.name is not valid
// 👏B) color[fruit.name] is not valid
// 💡C) color[fruit["name"]] is not valid     
// 😄D) All of them are valid

// Answer: A

// Explanation: This statement attempts to access the name property of the fruit object within the color object. However, the fruit object is not directly a property of the color object, so this option is not valid.
  