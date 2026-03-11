// Problem 3: You are given a string s consisting only of the characters '(' and ')'.
// Determine whether the given string is valid. A string is considered valid if every opening bracket '(' has a corresponding closing bracket ')'.

function length(input)
{
    let count=0;
    for (let i of input)
        count++;
    return count;
}
let s=')(';
let len=length(s);
let count=0;
for(let i of s)
{
    if(i=='(')
        count++;
    else if(i==')')
    {
        if(count==0)
        {
            console.log("Invalid String!");
            count--;
            break;
        }
        count--;
    }
    else
    {
        console.log("Invalid String!");
        count--;
        break;
    }
}
if(count==0)
{
    console.log("Valid string!");
}