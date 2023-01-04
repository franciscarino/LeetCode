'use strict';

function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {

    if (s[left] !== s[right]) {
      return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
    }

    left++;
    right--;
  }
  return true;
};

// Helper function to check if a string is a palindrome
function isPalindrome(string, left, right) {
  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}