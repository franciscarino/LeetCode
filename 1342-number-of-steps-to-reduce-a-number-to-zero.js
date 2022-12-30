'use strict';

function numberOfSteps(num) {
  let output = 0;
  while (num) {
    if (num % 2 === 0) {
      num /= 2;
      output++;
    } else {
      num -= 1;
      output++;
    }
  }
  return output;
}