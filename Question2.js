//Question2_Declare an array with more than 5 number of elements.

const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
console.log(numbers)

//Question3_Find the length of your array.

const number = [0, 1, 2, 3, 4, 5, 6, 10];
console.log(number.length);

//Question4_Get the first item, the middle item and the last item of the array.

const array = [1, 2, 3, 4, 5];

const firstItem = array[0];

const middleIndex = Math.floor(array.length / 2);
const middleItem = array[middleIndex];

const lastItem = array[array.length - 1];

console.log("First Item:", firstItem);
console.log("Middle Item:", middleItem);
console.log("Last Item:", lastItem);