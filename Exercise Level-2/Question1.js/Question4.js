//Question4_In countries array check if 'Ethiopia' exists in the array if it exists print
// 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = [
    "Ethiopia",
    "Afghanistan",
    "Canada",
    "Denmark",
    "Germany",
    "Japan",
    "Korea",
  ];
  let index = countries.indexOf("Ethiopia");
  
  if (index != -1) {
    console.log("This Country does exist in the array");
  } else {
    console.log("This Country does not exist in the array");
  }