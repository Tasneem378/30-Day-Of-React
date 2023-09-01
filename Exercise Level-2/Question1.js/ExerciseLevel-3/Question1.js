//Question1_The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
//Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by
//two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min)
//- Compare the value of (min - average) and (max - average), use abs() method.

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array
ages.sort((a, b) => a - b);
// Find min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
// Find median age
let medianAge;
const middleIndex = Math.floor(ages.length / 2);
medianAge = ages[middleIndex];
// Find average age
const sumAges = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sumAges / ages.length;
// Find range of ages
const ageRange = maxAge - minAge;

const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);

console.log(ages);
console.log(minAge);
console.log(maxAge);
console.log(medianAge);
console.log(averageAge);
console.log(ageRange);
console.log(diffMinAverage);
console.log(diffMaxAverage);