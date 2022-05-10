
// Codewriting

// Q. Given a linked list, turn the value of each node into its index, starting with 0.

// For example, given this linked list:
// 1 -> 5 -> 3

function ListNode(x) {
  this.value = x;
  this.next = null;
}

function solution(list) {
  let current = list;
  let idx = 0;
  while (current) {
    current.value = idx;
    current = current.next;
    idx++
  }

  return list;
}


// Q. Given a linked list and a target, remove all nodes that are NOT the target value

// For example, given this linked list:
// 1 -> 5 -> 5 -> 2, target 5

// Return this list:
// 5 -> 5

function ListNode(x) {
  this.value = x;
  this.next = null;
}

function solution(list, target) {
  if (!list) return []
  let sentinel = new ListNode();
  sentinel.next = list;
  let current = sentinel;

  while (current.next) {
    if (current.next.value !== target) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return sentinel.next;
}




// Codewriting

// Q. Given an integer k, create a linked list representing the first k values of the Fibonacci sequence.

// For example, given k = 1, return this list:
// 1



function ListNode(x) {
  this.value = x;
  this.next = null;
}

function solution(k) {

  if (k < 1) return []
  let array = [1, 1];

  for (let i = 1; i <= k; i++) {
    array.push(array[i] + array[i - 1])
  }

  return array.slice(0, k);
}




// Q. Given a linked list, return an array containing all its values.

// For example, given:
// 1 -> 3 -> 6 -> 2

// Return:
// [1, 3, 6, 2]

function ListNode(x) {
  this.value = x;
  this.next = null;
}

function solution(head) {
  if (!head) return []
  let current = head;
  let arr = [];
  while (current) {
    arr.push(current.value)
    current = current.next;
  }
  return arr;
}


// Q. Remove every other node in a linked list, starting from the second node.

// For example, given:
// 1 -> 3 -> 6 -> 2

// Return:
// 1 -> 6


function solution(head) {
  let current = head;

  while (current) {
    if (current.next) {
      current.next = current.next.next;
    }
    current = current.next;
  }

  return head;
}


// Q. Remove every kth node in a linked list, where k >= 2

// For example, given k = 2 and list:
// 1 -> 3 -> 6 -> 2

// Return:
// 1 -> 6

function ListNode(x) {
  this.value = x;
  this.next = null;
}

function solution(head, k) {
  if (!head) return [];
  let current = head;
  let counter = 1;

  while (current) {
    counter++;
    if (counter === k && current.next) {
      current.next = current.next.next;
      counter = 1;
    }

    current = current.next;
  }

  return head;
}


/* Given two linked lists of different length,
sum elements' value at the same position. */

function ListNode(x) {
  this.value = x;
  this.next = null;
}

function solution(head1, head2) {
  if (!head1 || !head2) return null;

  let current1 = head1;
  let current2 = head2;

  while (current1 && current2) {
    current1.value = current1.value + current2.value;

    // while (current1.value && !current2.value) {
    //     current1.value = current1.value + 0;
    // }
    // while (current2.value && !current1.value) {
    //     current1.value = 0 + current2.value
    // }
    current1 = current1.next;
    current2 = current2.next;
  }


  return head1;
}


/*Given a linked list, return the value of the
element that is at the 1/3 position from the head. */

function ListNode(x) {
  this.value = x;
  this.next = null;
}

function solution(head) {
  if (!head) return 0;
  let current = head;
  let count = 0;

  while (current) {
    count++;
    if (count % 3 === 0) {
      return current.value
    }
    current = current.next;
  }

}

/*
Given a linked list, make a copy of the list from
the kth position (from the head) to the end of the list. */
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function solution(head, k) {
  if (!head) return null;
  let count = 0;
  let fast = head;
  let slow = head;

  while (k > count && fast) {
    fast = fast.next;
    count++
  }
  if (k > count) return -1

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow
}

/* Given an unsorted linked list with unique values,
insert an element before the target element */
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function solution(head, target, value) {
  if (!head) return 0;
  let count = 0
  let current = head;
  let temp = head;

  while (current) {
    count++
    if (count === target) {
      temp = current;
      current = new ListNode(value)
      temp.next = current.next;
    }
    current = current.next
  }

  return head;
}

/* Given a sorted linked list of unique integers,
remove a target node from the list iteratively.
If the list does not contain the target element, do nothing.*/

function ListNode(x) {
  this.value = x;
  this.next = null;
}

function solution(list, target) {
  if (!list) return list;
  let current = list;

  while (current.next) {
    if (current.value === target) {
      current = current.next.next;
      return list
    }
    current = current.next;
  }

  /*
   Given an array of positive integers,
   find the first element that occurs k number of times.*/
  function solution(array, k) {
    if (array.length < 1) return -1;

    let obj = {}

    for (let i = 0; i < array.length; i++) {
      if (obj[array[i]]) {
        obj[array[i]]++
      } else {
        obj[array[i]] = 1
      }
    }

    for (let key in obj) {
      if (obj[key] === k) {
        return obj[key]
      }
    }
    return -1
  }


  /* Given a binary tree, count the number of elements
   in the tree !!!!!iteratively!!!!!!.*/
  function Tree(x) {
    this.value = x;
    this.left = null;
    this.right = null;
  }
  function solution(root) {
    if (!root) return 0;

    return solution(root.left) + solution(root.right) + 1
  }

  /* Given A Binary Tree And A Target Element's Value,
   Determine If The Tree Contains The Target Using BFS. */
  function Tree(x) {
    this.value = x;
    this.left = null;
    this.right = null;
  }
  function solution(root, target) {
    if (!root) return false;

  }


  /* Given a BST and a target element's value,
  insert the target in the appropriate position. */
  function Tree(x) {
    this.value = x;
    this.left = null;
    this.right = null;
  }
  function solution(root, target) {

  }


  /* Given a linked list, remove the head and tail
  of the list and return the new list */
  function ListNode(x) {
    this.value = x;
    this.next = null;
  }

  function solution(list) {
    // 1    2   3   4   5   null
    //              h
    //      p
    let head = list;
    let previous = null;

    while (head) {
      previous = head;
      if (!head.next) {
        head.next = null
      }
      head = head.next;
    }

    return list;
  }

  /*Given a linked list, remove the center node.
  If the length of the list is even, remove the
  first of the two center nodes. */
  function ListNode(x) {
    this.value = x;
    this.next = null;
  }
  //
  function solution(list) {
    if (!list) return null;

    let current = list;
    let count = 0;
    while (current.next && current.next.next) {
      count++;

      if (Math.floor(count / 2) === 0) {
        current = current.next;
      }
      current = current.next;
    }
    return list;
  }


  /* Remove every kth node in a linked list, where k >= 2
   For example, given k = 2 and list:
     1 -> 3 -> 6 -> 2 */

  function ListNode(x) {
    his.value = x;
    this.next = null;
  }
  function solution(head, k) {
    if (!head) return null;

    let current = head;
    let count = 1;

    while (current && current.next) {
      count++
      if (count === k) {
        current.next = current.next.next
      }
      current = current.next;
    }
    return head;
  }


  /*Given a linked list and a sorted array of ints,
   remove all nodes at the indices found in the array.
   Any indices that are past the end of the linked list should be ignored. Note that the indices refer to the indices before any nodes are removed.

  Example #1. Given the array [0, 2] and the linked list:
  1 -> 3 -> 5 -> 2 */

  function ListNode(x) {
    this.value = x;
    this.next = null;
  }

  function solution(list, indices) {

  }



  /*Remove every other node in a linked list,
  starting from the second node.

  For example, given:
  1 -> 3 -> 6 -> 2 */

  function ListNode(x) {
    this.value = x;
    this.next = null;
  }

  function solution(head) {
    if (!head) return null;

    let current = head;

    while (current.next) {
      current.next = current.next.next
    }

    return head;
  }

  /* Given a linked list and a target integer,
  remove all nodes with the value target. */
  function ListNode(x) {
    this.value = x;
    this.next = null;
  }

  function solution(list, target) {
    while (list && list.value === target) list = list.next;

    let current = list;

    while (current && current.next) {
      if (current.value === target) {
        current.next = current.next.next;
      }

      current = current.next;
    }

    return list;
  }