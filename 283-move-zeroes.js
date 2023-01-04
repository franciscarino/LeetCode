'use strict';

//Input: nums = [0,1,0,3,12]
//Output: [1,3,12,0,0]

function moveZeroes(nums) {
  let zeroCount = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      zeroCount++;
    }
  }
  while (zeroCount) {
    nums.push(0);
    zeroCount--;
  }
  return nums;
}