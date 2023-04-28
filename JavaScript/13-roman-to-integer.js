'use strict';

/**
 * Input: s = "III" 
 * Output: 3 
 *
 * Input: s = "LVIII"
 * Output: 58
 *
 */

function romanToInt(s) {
  const roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let output = 0;
  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      output -= roman[s[i]];
    } else {
      output += roman[s[i]];
    }
  }
  return output;
}