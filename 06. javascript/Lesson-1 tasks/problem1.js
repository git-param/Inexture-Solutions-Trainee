// Problem 1:

// Write a function that takes a student’s marks in 3 subjects as input and calculates the total and average

// Uses conditional statements to assign a grade
// A: Average ≥ 80
// B: Average ≥ 60
// C: Average ≥ 40
// F: Below 40

//i had run npm install prompt-sync to take input

let avg;
const prompt=require('prompt-sync')();
const a=Number(prompt("Enter marks for Maths: "));
const b=Number(prompt("Enter marks for Physics: "));
const c=Number(prompt("Enter marks for Chemistry: "));

const calculate_avg=(a,b,c)=>{return (a+b+c)/3.0;};

avg=calculate_avg(a,b,c);
console.log("Average: "+avg);

if(avg>=80)
    console.log("Grade A");
else if(avg>=60)
    console.log("Grade B");
else if(avg>=40)
    console.log("Grade C");
else
    console.log("Grade F");