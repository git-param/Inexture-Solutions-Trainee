// Problem 2: Print Duplicate Values from an Array
// Given an array of numbers, print all duplicate values only once.




// Its same as the 2-1 just the diff is that one can store the count of the duplicate values too
const arr=[1,1,2,3,4,4,4,5,6,7,7,7,8,8];
let dict={};
function length(input)
{
    let count=0;
    for (let i of input)
        count++;
    return count;
}

function add_key(key)
{
    dict[key]=1;
}
function add_count(key)
{
    dict[key]=dict[key]+1;
}
len=length(arr);

for(let i=0;i<len;i++)
{
    if(arr[i] in dict)
        add_count(arr[i]);
    else 
        add_key(arr[i]);
}

// console.log(dict);

for(let key in dict)
{
    if(dict[key]>1)
        console.log(key);
}
