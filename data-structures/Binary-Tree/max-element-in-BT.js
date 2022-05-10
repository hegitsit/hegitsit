// find the height of a Binary Tree
// reversing a linkedList  is Linear time 0(n) for time and Constant 0(1) for space

/*
At each level of the recursion, call the function on both the left and right subtrees.
 Return the max of [left subtree, right subtree, current node value].
  If there are no subtrees (current node is a leaf node), then return the value at this node..
*/

class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value
    this.left = leftChild
    this.right = rightChild
  }
}
function findTreeMax(root) {
  if (!root) return null;
  return Math.max(findTreeMax(root.left), findTreeMax(root.right), root.value);
}


