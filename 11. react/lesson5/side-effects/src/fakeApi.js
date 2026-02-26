import { users } from "./mockData";

function simulateDelay(time = 800) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// GET all users
export async function getUsers() {
  await simulateDelay();
  return [...users];
}

// GET single user
// export async function getUserById(id) {
//   await simulateDelay();

//   const user = users.find((u) => u.id === id);

//   if (!user) {
//     throw new Error("User not found");
//   }

//   return { ...user };
// }

// fakeApi.js

export function getUserById(id) 
{
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        // name: `User ${id}`,
        // email: `user${id}@example.com`,
        name: users[id].name,
        email: users[id].email
      });
    }, 800);
  });
}

// CREATE user
export async function createUser(newUser) {
  await simulateDelay();

  const id = users.length + 1;
  const user = { id, ...newUser };
  users.push(user);

  return user;
}