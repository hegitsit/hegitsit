// find kth from last in a linked list
// finding kth from last in one pass is Linear time 0(n) and Constant 0(1) for space

/*
Create a for loop or while loop that moves a fast pointer forward k times.
Then, create another slow pointer.
Move both forward at the same pace.
When fast hits the end of the list, return slow.
*/

function kthFromLast(head, k) {
  let slow = head;
  let fast = head;
  let count = 0;

  while (count < k) {
    if (fast) {
      fast = fast.next;
      count++;
    } else return -1;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  if (!slow) return -1;
  return slow.value;
}