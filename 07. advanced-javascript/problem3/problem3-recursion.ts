// Problem 3: You are given a string s consisting only of the characters '(' and ')'.
// Determine whether the given string is valid. A string is considered valid if every opening bracket '(' has a corresponding closing bracket ')'.

function len(input:string)
{
    let count:number=0;
    for (let i of input)
        count++;
    return count;
}

function check_validation(str:string,index:number,count:number,l:number)
{
    if(index<=(l-1))
    {
        if(str[index]=='(')
            count++;
        else if(str[index]==')')
            count--;
        else
            return -1;

        // console.log("Count: ",count);
        return check_validation(str,++index,count,l);
    }
    else
    {
        // console.log("Last Count: ",count);
        return count;
    }
}

let s:string='())))';
let l:number=len(s);
let flag:number=check_validation(s,0,0,l);
console.log("Flag Value: ",flag);
if(flag==0)
{
    console.log("Valid String");
}
else
    console.log("Invalid String!");