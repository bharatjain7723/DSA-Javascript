// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null

function maxSubarraySum(arr, num) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length < num) return null;
    let max = 0;
    for (let i = 0; i < num; i++) {
        max += arr[i];
    }

    let temp = max;

    for (let j = 1; j < arr.length - num + 1; j++) {
        temp = temp - arr[j - 1] + arr[j - 1 + num];
        max = temp >= max ? temp : max;
    }
    return max;
}

//********************************************************************************************* */

// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

// Time Complexity - O(n)
// Space Complexity - O(1)

// Examples:

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0

function minSubArrayLen(arr, num) {
    // add whatever parameters you deem necessary - good luck!
    let len = Infinity;
    let sum = 0;
    let start = 0;
    let end = 0;

    while (start < arr.length) {
        if (sum < num && end < arr.length) {
            sum += arr[end];
            end++;
            console.log("if sum: ", sum, "end: ", end, "len: ", len);
        } else if (sum >= num) {
            len = Math.min(len, end - start);
            sum = sum - arr[start];
            start++;
            console.log("else sum: ", sum, "start: ", start, "len: ", len);
        } else {
            break;
        }
    }
    console.log(sum);
    return len === Infinity ? 0 : len;
}

/******************************************************************************** */

// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
// Time Complexity - O(n)

findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6

// PARTIALLY CORRECT
function findLongestSubstring(str) {
    // add whatever parameters you deem necessary - good luck!
    if (!str.length) return 0;

    let start = 0;
    let end = 0;
    let len = 0;
    let freq = {};
    let temp = "";

    while (start < str.length) {
        if (!freq[str[end]] && end < str.length) {
            temp = temp + str[end];
            freq[str[end]] = 1;
            end++;
        } else {
            len = Math.max(len, end - start);
            temp = temp.substring(1);
            if (str[start] === str[end]) freq[str[end]] = 0;
            start++;
        }
    }
    return len;
}
