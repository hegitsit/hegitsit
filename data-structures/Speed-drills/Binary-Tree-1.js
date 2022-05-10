// Given a binary tree, count the number of nodes that are equal to a given target.

// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
// function solution(root, target) {
//     if (!root) return null;
//     let count = 0;

//     if (root.value === taret) {
//         count++;
//     }

//     while (root.left.value ===) {}
//     return count;
// }

// Given a binary tree, a target and a replacement, replace all nodes with the target value with the replacement value.



function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}
function solution(root, target, replacement) {
  if (!root) return null;

  while ()
    solution(root.left, target, replacement);
  solution(root.right, target, replacement)

}


// Q. Given a binary tree, count the number of non-leaf nodes (leaf nodes do not have any children).



// Algo Blitz



// Q. Given an unsorted linked list, count the number of elements iteratively.
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function solution(arg1) {
  let current = arg1;
  let count = 0;

  while (current) {
    count++
    current = current.next;
  }
  return count;
}

// Q. Given a sorted linked list of unique integers, remove a target node from the list recursively. If the list does not contain the target element, do nothing.
function solution(list, target) {
  if (!list) return [];
  let sentinel = new ListNode(0)
  sentinel.next = list;
  let current = sentinel

  while (current.next) {
    if (current.next.value === target) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return sentinel.next;
}

// Q. Reverse a given linked list.


function solution(list) {
  if (!list) return null;
  let current = list;
  let reverse = null;

  while (current) {
    [current.next, reverse, current] = [reverse, current, current.next]
  }
  return reverse;
}

// Q. Given an unsorted array, perform insertion sort in ascending order.
function solution(array) {
  if (array.length <= 1) return array;

  for (let i = 1; i < array.length; i++) {
    let j = i;

    while (j > 0 && array[j - 1] > array[j]) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]]
      j--
    }
  }
  return array;

}

// Q. Given an unsorted array, perform merge sort in ascending order.
function solution(array) {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2)
  let left = solution(array.slice(0, mid))
  let right = solution(array.slice(mid))

  return mergeSort(left, right)
}

function mergeSort(left, right) {
  let sorted = []

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      sorted.push(right[0])
      right.shift()
    } else {
      sorted.push(left[0])
      left.shift()
    }
  }

  while (left.length) {
    sorted.push(left[0]);
    left.shift()
  }

  while (right.length) {
    sorted.push(right[0])
    right.shift();
  }

  return sorted;

}

// Q. Given an unsorted array, return the number of unique values. For example, given [1, 1], there are two elements but only one unique value: 1.
function solution(array) {
  if (array.length < 1) return 0;
  let newArray = [...new Set(array)]
  newArray.sort((a, b) => a - b);

  return newArray.length;
}

// Q. Given a binary tree, find the element with the highest value.

function solution(root) {
  if (!root) return 0;
  return Math.max(solution(root.left), solution(root.right), root.value)
}

// Given a binary tree, find the height of the tree.
function solution(root) {
  if (!root) return -1;
  return Math.max(solution(root.left), solution(root.right)) + 1
}


// Q. Given a binary tree, determine if it is a valid BST where the values to the left of a given node must be smaller and to the right, the values must be greater.
function solution(root) {
  if (validateBST(root, -Infinity, Infinity)) return true;
  return false;
}

function validateBST(node, min, max) {
  if (!node) return true;

  if (node.value <= min || node.value > max) return false;

  return validateBST(node.left, min, node.value) && validateBST(node.right, node.value, max);
}

// Q. Given a target n, find the n-th Fibonacci sequence number.

function solution(n) {
  if (n < 1) return 0;
  let arr = [1, 1];

  for (let i = 1; i < n; i++) {
    arr.push(arr[i] + arr[i - 1])
  }
  return arr[arr.length - 2]
}
