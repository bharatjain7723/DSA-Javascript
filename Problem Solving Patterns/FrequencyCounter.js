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
        if(!lookup[char]) {
            return false;
        } else {
            lookup[char]--;
        }
    }

    return true;
}
