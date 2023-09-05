//Question2_Compare the values of myAge and yourAge using if … else. Based on the comparison
//and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”)
//to get the age as input.

let yourAge = parseInt(prompt("Enter your age:"));

let myAge = 25;

if (yourAge > myAge) {
  console.log("You are " + (yourAge - myAge) + " years older than me.");
} else if (yourAge < myAge) {
  console.log("I am " + (myAge - yourAge) + " years older than you.");
} else {
  console.log("We are the same age.");
}


