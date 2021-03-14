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