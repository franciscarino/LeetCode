'use strict';

function lengthOfLastWord(s) {
  const words = s.trim().split(" ");
  console.log(words);
  return words[words.length - 1].length;
}