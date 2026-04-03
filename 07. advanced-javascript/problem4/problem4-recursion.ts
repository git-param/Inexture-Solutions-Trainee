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

function len(input:number[])
{
    let count=0;
    for (let i of input)
        count++;
    return count;
}

function getindex(nums:number[],target:number,index:number)
{
    if(target<=nums[0])
        return 0;
    else
    {
        if(index<len(nums))
        {
            if(nums[index]<target && nums[index+1]>=target)
                return index+1;
            else
                return getindex(nums,target,++index);
        }
        else 
            return len(nums);
    }
}

let nums:number[]=[1,3,5,6];
let target:number=2;
let output:number=getindex(nums,target,0);
console.log("Index: "+output);