// Contains Duplicate

// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1: input: nums = [ 1, 2, 3, 3] output: true
// Example 1: input: nums = [ 1, 2, 3, 4] output: false

const hasDuplicate = (nums) => {
    // initialize Hash Map to store key-values of nums array num:true or false
    const map = {};
    // loop through nums array and check if num is in map if so return true if not add the num
    for(let num of nums){
        if(map[num]){
            return true
        }else{
            map[num] = true;
        }
    }
   
    return false;
}


console.log(hasDuplicate([ 1, 2, 3, 3] )) // should return true;
console.log(hasDuplicate([[ 1, 2, 3, 4] ])) // should return false;



