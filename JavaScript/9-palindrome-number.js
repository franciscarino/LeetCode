'use strict';

function isPalindrome(x) {
  let string = x.toString();

  let reverse = string.split('').reverse().join('');

  return string === reverse;
}