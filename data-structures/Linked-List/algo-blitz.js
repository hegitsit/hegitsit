// Singly-linked lists are already defined with this interface:
function ListNode(x) {
  this.value = x;
  this.next = null;
}



/* Given a linked list, insert a node with the value 0 after each existing node.
//  This should double the length of the original list and every other value should be a 0 */
//  Linked list questions can be tricky but they're just a matter of updating pointers in the right order. Try drawing out a small diagram:

//  1 -> 2 -> 3
//  Now let's say you create a new node 0:

//     0         0        0
//  1 -> 0 -> 2 -> 0 -> 3 -> 0
//  To place it after 1, you know its next pointer must point at 2 and 1's next must point at it. But which happens first? Do you need a temp variable? Playing with this should give you a strong bas
//   0
// 1 -> 0
function solution(head) {
  if (!head) return [];

  let current = head;
  // let temp = null;

  while (current) {
    let temp = current;
    current = new ListNode(0);
    temp.next = current;
    current = current.next;
  }
  return current; // return current or head
}

// Given a linked list of positive integers, find the first element that occurs k number of times.

function solution(head) {

}


// Given a linked list, remove all nodes with an odd value from the list.
function solution(head) {
  let current = head;
  if (!current) return [];

  if (current.value % 2 !== 0) return head.next;

  while (current.next) {
    if (current.next.value % 2 !== 0) {
      current.next = current.next.next;
      return head;
    }
    current = current.next;
  }
  return head;
}

// Given a linked list, limit the number of repetitions to k. Iterate through the linked list, keeping track of how many times the value has been repeated. Once a value has been repeated k target number of times, remove any future instances of that n