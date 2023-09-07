//Question3_Find people who are MERN stack developer from the users object.

const users = [
    { name: "Alex", stack: "Full stack developer" },
    { name: "Brook", stack: "MERN stack developer" },
    { name: "Thomas", stack: "Front end developer" },
    { name: "Daniel", stack: "MERN stack developer" },
];

  const mernStackDevelopers = users.filter(user => user.stack === "MERN stack developer");
  console.log(mernStackDevelopers);
