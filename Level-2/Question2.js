//Question2_First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// Remove punctuations
const sanitizedString = text.replace(/[^\w\s]/g, '');

// Convert string to array of words
const wordArray = sanitizedString.split(' ');

// Count the number of words
const wordCount = wordArray.length;

console.log(sanitizedString);
console.log(wordArray);
console.log(wordCount);




