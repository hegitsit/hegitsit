// find the height of a Binary Tree
// reversing a linkedList  is Linear time 0(n) for time and Constant 0(1) for space

/*
Create a prev pointer and a curr pointer.
prev starts by pointing at nil, and curr points at the head of the list.
Before a swap, keep track of curr.next.
Then, point curr.next at prev, then move forward both prev and curr.
*/
class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value
    this.left = leftChild
    this.right = rightChild
  }
}

function findTreeHeight(root) {
  if (!root) return 0;
  return findTreeHeight(root.left) + findTreeHeight(root.right) + 1;
}


// Q. Given a binary tree, count the number of non-leaf nodes (leaf nodes do not have any children).

function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}
function solution(root, count = 0) {

  if (root.left) {
    solution(root.left, count++)
  }
  if (root.right) {
    solution(root.right, count++)
  }

  return count;
}
