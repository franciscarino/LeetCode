'use strict';

function levelOrder(root) {
  if (!root) return [];
  const result = [];
  let queue = [root];
  while (queue.length) {
    const size = queue.length;
    const currentLevel = [];
    for (let i = 0; i < size; i++) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    result.push(currentLevel);
  }
  return result;
}