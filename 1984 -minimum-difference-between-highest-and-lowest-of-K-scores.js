'use strict';

function minimumDifference(nums, k) {
  nums.sort((a, b) => a - b);
  let min = Number.MAX_VALUE;
  for (let i = 0; i <= nums.length - k; i++) {
    min = Math.min(min, nums[i + k - 1] - nums[i]);
  }
  return min;
};