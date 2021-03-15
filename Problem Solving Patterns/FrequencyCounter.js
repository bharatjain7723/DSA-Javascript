// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false) // false
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true

// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

function validAnagram2(str1, str2) {
    // add whatever parameters you deem necessary - good luck!
    if (str1.length !== str2.length) {
        console.log(false);
        return false;
    }

    let freq1 = {};
    let freq2 = {};

    for (let char of str1) {
        freq1[char] = ++freq1[char] || 1;
    }

    for (let char of str2) {
        freq2[char] = ++freq2[char] || 1;
    }

    for (let key in freq1) {
        if (freq1[key] !== freq2[key]) {
            console.log(false);
            return false;
        }
    }

    console.log(true);

    return true;
}

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        console.log(false);
        return false;
    }

    let lookup = {};

    for (let char of str1) {
        lookup[char] = ++lookup[char] || 1;
    }

    for (let char of str2) {
        // freq2[char] = ++freq2[char] || 1;
        if (!lookup[char]) {
            return false;
        } else {
            lookup[char]--;
        }
    }

    return true;
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

// Time - O(n)
// Space - O(n)


function areThereDuplicates(...arr) {
    // good luck. (supply any arguments you deem necessary.)

    // Frequency counter
    if (arr.length === 0) return null;

    let freq = {};

    for (let el of arr) {
        if (freq[el]) {
            return true;
        } else {
            freq[el] = 1;
        }
    }

    return false;
}

// NOTE: There is a way to do this by Multiple Pointer in Time: O(nlogn) and Space of O(1)

