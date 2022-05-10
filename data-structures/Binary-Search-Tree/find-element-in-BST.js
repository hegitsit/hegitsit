
// doest item exist in a BST
/* searching for a target in a BST is Linear time 0(n) worst case
and best case 0(1) if its the first element
and for space its 0(1) for for only checking one element at any given time */

/*
Have curr node that starts at the root of the tree.
If the node is less than the target, move curr to curr.right.
If the node is greater, move curr to curr.left.
If curr is nil at any point return false.
*/

function searchBST(root, target) {
  let current = root;

  while (current) {
    if (current.value < target) {
      current = current.right;
    }
    else if (current.value > target) {
      current = current.left;
    }
    else return true;
  }
  return false;
}