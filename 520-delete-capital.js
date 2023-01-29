"use strict";

function detectCapitalUse(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else if (word === word.toLowerCase()) {
    return true;
  } else if (word[0] === word[0].toUpperCase()) {
    return true;
  } else {
    return false;
  }
}