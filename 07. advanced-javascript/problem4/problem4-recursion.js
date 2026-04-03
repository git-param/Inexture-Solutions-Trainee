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
function len(input) {
    var count = 0;
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var i = input_1[_i];
        count++;
    }
    return count;
}
function getindex(nums, target, index) {
    if (target <= nums[0])
        return 0;
    else {
        if (index < len(nums)) {
            if (nums[index] < target && nums[index + 1] >= target)
                return index + 1;
            else
                return getindex(nums, target, ++index);
        }
        else
            return len(nums);
    }
}
var nums = [1, 3, 5, 6];
var target = 2;
var output = getindex(nums, target, 0);
console.log("Index: " + output);
