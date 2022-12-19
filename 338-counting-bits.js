'use strict';

function climbStairs(n) {
  if (n <= 2) {
    return n;
  }

  let ways = [1, 2];
  for (let i = 2; i < n; i++) {
    ways.push(ways[i - 1] + ways[i - 2]);
  }
  return ways[ways.length - 1];
}
