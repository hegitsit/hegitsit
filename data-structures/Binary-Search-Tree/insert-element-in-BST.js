// Insert element into BST
//

/*
 Have curr node that starts at the root of the tree.
If the node is less than the target, move curr to curr.right.
If the node is greater, move curr to curr.left.
If the position that you're moving curr into is nil at any point,
insert the node in that position instead of moving curr.
*/

class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value
    this.left = leftChild
    this.right = rightChild
  }
}

function insertBST(root, target) {
  let current = root;
  if (!current) return new TreeNode(target);

  while (current) {
    if (current.value < target) {
      current = current.right;
    } else if (current.value > target) {
      current = current.left;
    }
    else {
      current = new TreeNode(target);
    }
  }
  return root;
}