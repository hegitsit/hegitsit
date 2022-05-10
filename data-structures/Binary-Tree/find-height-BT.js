// find the height of a Binary Tree
// reversing a linkedList  is Linear time 0(n) for time and Constant 0(1) for space

/*
Create a prev pointer and a curr pointer.
prev starts by pointing at nil, and curr points at the head of the list.
Before a swap, keep track of curr.next.
Then, point curr.next at prev, then move forward both prev and curr.
*/

/*
The high level approach is to call the function recursively
on the left and right children, if they exist. return max(leftHeight, rightHeight) + 1.
*/
class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value
    this.left = leftChild
    this.right = rightChild
  }
}

function findTreeHeight(root) {
  if (!root) return -1;
  return Math.max(findTreeHeight(root.left), findTreeHeight(root.right)) + 1;
}


// Given a binary tree and a depth, remove all nodes that are lower than that depth.

// Given a binary tree, return the most frequent value. If multiple most frequent exist, return any at random.

// Given a binary tree, give all nodes that have only one child an additional child with the value of zero. For example, if a node has only a left child, add a right child with value zero. If a node has only a right child, add a left child with value zero.

function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}
function solution(root) {
  if (!root) return null;

  while (root.left && !root.right) {
    root.right = new Tree(0)
    solution(root.left)
  }

  while (root.right && !root.left) {
    root.left = new Tree(0)
    solution(root.right)
  }

  return root;
}