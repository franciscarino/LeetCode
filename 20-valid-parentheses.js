'use strict';

/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * 
 * Input: s = "()"
 * Output: true
 * 
 * Input: s = "()[]{}"
 * Output: true
 * 
 * Input: s = "(]"
 * Output: false
 */
function isValid(s) {
  const openSymbols = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      openSymbols.push(s[i]);
    } else if (s[i] === ')' && openSymbols.length !== 0 && openSymbols[openSymbols.length - 1] === '(') {
      openSymbols.pop();
    } else if (s[i] === ']' && openSymbols.length !== 0 && openSymbols[openSymbols.length - 1] === '[') {
      openSymbols.pop();
    } else if (s[i] === '}' && openSymbols.length !== 0 && openSymbols[openSymbols.length - 1] === '{') {
      openSymbols.pop();
    } else {
      return false;
    }
  }
  return openSymbols.length === 0;
}