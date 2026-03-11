// Problem 4: Search insert position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

function length(input)
{
    let count=0;
    for (let i of input)
        count++;
    return count;
}

let nums=[1,3,5,6];
let target=7;
let output=undefined;

if(target<=nums[0])
    output=0;
else
{
    for(i=0;i<length(nums);i++)
    {
        if(nums[i]<target && nums[i+1]>=target)
            output=i+1;
    }
}

if(output==undefined)
    output=length(nums);

console.log("Index: "+output);