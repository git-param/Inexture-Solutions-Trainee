// Problem 1:

// You are given an array of employee objects with name, salary, and department.

// Find all employees earning more than ₹50,000
// Calculate the total salary of all employees
// Use destructuring to extract employee details

const employees = 
[
  { name:"Param",salary:60000,department:"IT" },
  { name:"Vaibhav",salary:45000,department:"HR" },
  { name:"Krutarth",salary:75000,department:"Finance" },
  { name:"Devansh",salary:50000,department:"Marketing" }
];
let total_sal = 0;
let highEarningEmployees = [];
for (let emp of employees) 
{
    const { name, salary, department } = emp;
    total_sal+=salary;
    if (salary>50000) 
        highEarningEmployees.push(emp);
    //console.log(name+" works in "+department+" and earns ₹"+salary);
}
console.log("Total Salary:", total_sal);
console.log("Employees earning more than ₹50,000:", highEarningEmployees);
