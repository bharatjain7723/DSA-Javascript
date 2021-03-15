// Q Find first pair in a sorted array of intergers whose sum is zero. If found, return an array containing the pair else return undefined.

// Example of Multiple pointers starting from start and end (left and right)

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// ********************************************************************

// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// Example of Multiple pointers starting from the same end

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
// Time Complexity - O(n)
// Space Complexity - O(n)

// Bonus

// You must do this with constant or O(1) space and O(n) time.

function countUniqueValues(arr){
    if(arr.length === 0){
        console.log(0);
        return 0;
    }

    let i = 0;
    let j = 1;
    let count = 0;
    
    while(j < arr.length) {
        if(arr[i] !== arr[j]) {
            count++;
            if(j === arr.length - 1) {
                count++;
            }
        }
        i++;
        j++;
    }
    console.log(count)
    return count;
}

//********************************************************************************************* */

// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
//
// Examples:

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true

// Restrictions:

// Time - O(n log n)
// Space - O(1)

function areThereDuplicates(...arr) {
    arr.sort((a,b)=> a > b); 
    let start = 0;
    let next = 1;

    while(next < arr.length) {
        if(args[start] === args[next]) return true;
        start++;
        next++;
    }

    return false;
}

// NOTE: There is a way to do this by frequency counter in Time and Space of O(n)

/*****************************************************************************************************/

// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(sub, str) {
    if(sub.length === 0) return false;
    
    let i = 0; // index of str
    let j = 0; // index of sub
    while(i < str.length) {
        if(str[i] === sub[j]) {
            j++
        }
        i++;
        if(j === sub.length) return true;
    }
    return false;
  }