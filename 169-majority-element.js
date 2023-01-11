'use strict';

function majorityElement(nums) {
  const numCounts = freqCounter(nums);
  console.log("numCounts:", numCounts);

  let keyList = Object.values(numCounts);
  console.log("keyList", keyList);
  let maxNum = Math.max(...keyList);
  console.log("maxNum", maxNum);

  for (let num in numCounts) {
    console.log('num: ', num);
    if (numCounts[num] === maxNum) {
      return num;
    }
  }
}

function freqCounter(nums) {
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] in numObj)) {
      numObj[nums[i]] = 1;
    } else {
      numObj[nums[i]]++;
    }
  }
  return numObj;
}