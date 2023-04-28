'use strict';

function addBinary(a, b) {
  let carry = 0;
  let result = "";
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let x = i >= 0 ? parseInt(a[i]) : 0;
    let y = j >= 0 ? parseInt(b[j]) : 0;
    let sum = x + y + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
    i--;
    j--;
  }

  return result;
}