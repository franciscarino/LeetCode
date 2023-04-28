/*
Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different 
word or phrase, typically using all the original letters exactly once.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Input: strs = [""]
Output: [[""]]

Input: strs = ["a"]
Output: [["a"]]
*/

function groupAnagrams(strs) {
  const output = [];

  const obj = {};

  for (let i = 0; i < strs.length; i++) {
    const strSorted = strs[i].split("").sort().join("");

    if (obj[strSorted] !== undefined) {
      output[obj[strSorted]].push([strs[i]]);
    } else {
      output.push(strs[i]);
      obj[strSorted] = output.length - 1;
    }
  }
  return output;
}

// alternate solution

function groupAnagrams2(strs) {
  const anagrams = {};

  for (const s of strs) {
    const sortedStr = s.split('').sort().join('');
    if (sortedStr in anagrams) {
      anagrams[sortedStr].push(s);
    } else {
      anagrams[sortedStr] = [s];
    }
  }
  return Object.values(anagrams);
}