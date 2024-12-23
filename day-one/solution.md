## Problem Statement
We are tasked with determining if an array contains duplicate values. If any value appears more than once, return true. Otherwise, return false.

### Approach: Using a Hash Map
To solve the problem efficiently, we use a hash map (or an object in JavaScript). This approach helps us track the values we've seen so far as we iterate through the array.

- Hash maps allows for constant time complexity O(1) for checking if an element exists. 
- This is more efficient that using nested loops O(n^2) as it avoids repeatdly iterating over the array to find duplicates 

### Step-by-Step Solution
1. Initialize the Hash Map:
- Create an empty hasp map to store elements from the array. The key with be the element in the array[num], and the value will be a boolean -> num:true or false
2. Iterate through the Array:
- Use a for loop to go through each element in the array 
3. Check for Duplicates:
For each number, check if it exists in the hash map:
- If it exists: return true, there is a duplicate in the array 
- if it does not exist: add the number to the hash map with the value true
4. Return false if there is no duplicate: 
- If the loop completes without finding duplicate, return false 


## Complexity Analysis

- Time Complexity: O(n), where n is length of array. We iterate through the array once, and each has map operation (insert or lookup) takes O(1)

- Space Complexity: O(n), as store up to n unique elements in the hash map. 