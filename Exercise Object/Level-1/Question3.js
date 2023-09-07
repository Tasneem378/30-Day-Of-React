//Question3_Add name, legs, color, age and bark properties for the dog object. The bark property
//is a method which return woof woof.

const dog = {
    name: "Mex",
    legs: 4,
    color: "Black",
    age: 3,
    bark: function() {
      return "Woof Woof";
    }
  };  
  // Accessing the properties and method
  console.log(`Name: ${dog.name}`);
  console.log(`Legs: ${dog.legs}`);
  console.log(`Color: ${dog.color}`);
  console.log(`Age: ${dog.age}`);
  console.log(`Bark: ${dog.bark()}`);
  