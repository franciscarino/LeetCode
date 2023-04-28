/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different 
word or phrase, typically using all the original letters exactly once.

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
*/

function isAnagram(s, t) {
  const sObj = freqCounter(s);
  const tObj = freqCounter(t);

  if (sObj.length !== tObj.length) return false;

  for (let key in sObj) {
    if (sObj[key] !== tObj[key]) return false;
  }
  for (let key in tObj) {
    if (tObj[key] !== sObj[key]) return false;
  }

  return true;
}

function freqCounter(string) {
  const counter = {};
  for (let letter of string) {
    if (letter in counter) {
      counter[letter]++;
    } else {
      counter[letter] = 1;
    }
  }
  return counter;
}