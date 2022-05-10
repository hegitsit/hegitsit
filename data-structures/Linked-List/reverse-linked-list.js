// reversing a linkedList
// reversing a linkedList  is Linear time 0(n) for time and Constant 0(1) for space

/*
Create a prev pointer and a curr pointer.
prev starts by pointing at nil, and curr points at the head of the list.
Before a swap, keep track of curr.next.
Then, point curr.next at prev, then move forward both prev and curr.
*/

function reverse(head) {
  let current = head;
  let reverse = null;
  if (!current) return null;

  while (current) {
    // let temp = current.next;
    // current.next = reverse;
    // reverse = current;
    // current = temp;
    [current.next, reverse, current] = [reverse, current, current.next]
  }
  return reverse;
}