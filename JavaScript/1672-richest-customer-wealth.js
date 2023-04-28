'use strict';

function maximumWealth(accounts) {
  let maxWealth = -Infinity;

  for (let i = 0; i < accounts.length; i++) {
    let total = 0;
    let banks = accounts[i];
    for (let bank of banks) {
      total += bank;
      if (total > maxWealth) maxWealth = total;
    }
  }
  return maxWealth;
}