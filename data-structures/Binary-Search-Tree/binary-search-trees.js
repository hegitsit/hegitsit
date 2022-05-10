/*
  What is a binary search tree?
    A binary search tree is a tree where are values of all the left nodes
    are less than the root node and all the right nodes are greater than the root

  YOU ALWAYS NEED A HELPER FUNCTION!!!!!
  ALWAYS USE INFINITY AND -INFINITY FOR LOWER AND UPPER BOUNDS
*/

class Node {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function validateBST(tree) {
  if (isBSThelper(tree, -Infinity, Infinity)) return true;
  return false;
}

function isBSThelper(node, min, max) {
  if (!node) return true;
  if (node.value < min || node.value >= max) return false;

  return isBSThelper(node.left, min, node.value) && isBSThelper(node.right, node.value, max);
}

// Test Cases
var tree1 = new Node(2, new Node(1), new Node(3))
var tree2 = new Node(1, new Node(2), new Node(3))
var tree3 = new Node(8, new Node(3, new Node(1), new Node(6)), new Node(10, null, new Node(14, new Node(13))))
console.log(validateBST(null)) // true
console.log(validateBST(tree1)) // true
console.log(validateBST(tree2)) // false
console.log(validateBST(tree3)) // true
console.log(validateBST(new Node())) // true
