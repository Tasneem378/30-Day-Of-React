//Question1_Find the person who has many skills in the users object.
const users = {
  Tasneem: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },  
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
      "Nodejs",
      "Python",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let mostSkilled = 0;
let maxSkills = 0;

for (const username in users) {
  const user = users[username];
  const numSkills = user.skills.length;

  if (numSkills > maxSkills) {
    maxSkills = numSkills;
    mostSkilled = username;
  }
}
console.log(`The many skills is ${mostSkilled} with ${maxSkills} skills.`);

