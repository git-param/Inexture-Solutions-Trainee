// Problem 1: User Profile Using ES6 Features
// Create a program to display a user profile using modern JavaScript features.

// The user object contains:

// name
// age
// role
// Your task is to:

// Use const and arrow functions
// Use object destructuring
// Use template literals to print user details in a clean format


const user=[{pname: "Param", age: 21, role: "Trainee Consultant"},
            {pname: "rushil", age:80, role:"Trainer Consultant"}
            ];

user.forEach( ({pname,age,role}=user) => {
                    console.log(`name : ${pname} , age : ${age} , role : ${role}`);
                });