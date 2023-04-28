'use strict';

/*
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
*/

function runningSum(nums) {
  let runningSum = [];
  let sum = 0;

  for (let num of nums) {
    sum += num;
    runningSum.push(sum);
  }

  return runningSum;

}