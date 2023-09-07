//Question4_Set your name in the users object without modifying the original users object.

const users = {
  user1: { name: "Alice" },
  user2: { name: "Bob" },
};

const updatedUsers = { ...users };

updatedUsers.user3 = { name: "M Tasneem" };

console.log(updatedUsers);
