
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// kth last element
// 1  2  3  4  5

/*

fast and slow pointers

1. increment fast k times
2. increment fast and slow until fast is null

*/

// return the 2nd to last element
// create a current pointer


/*
  do some checks for head, see if it is null
  loop until currr.next.next is null
  return curr
*/

// kedir


const secondToLast = (head) => {
  if (!head) return null;
  if (!head.next) return null;

  let curr = head;

  while (curr && curr.next && curr.next.next) {

    curr = curr.next;

  }

  return curr.value;

}


// 1  2  3  4  5

// k = 2
// 1  2  3

/*
increment fast k times
increment fast and slow until fast is null

to delete an element, we must delete it by setting the previous element's.next to null

create a sentinel

*/


const removeLastKElems = (head, k) => {

  if (!head) return null;

  let p1 = head;
  let p2 = head;
  let count = 0;

  // let is a dynamic
  // const n = 3;

  // k is greater than the length of our list
  for (let i = 0; i < k; i++) {
    // if(p1){
    //    p1 = p1.next;
    // }
    // 1  2
    // p1 = null
    if (!p1) {
      return null;
    }
    p1 = p1.next;
  }

  // the above loop makes sure that k is not greater than the length of the list

  // we still need to account for if k is equal to the length of the list

  // what if p1 = null after we increment from the previous loop
  // we need to check if p1 does not exist
  // if p1 doesnt exist, that means we are trying to delete whole list, so we should return null
  if (!p1 || !p2) return null;
  while (p1.next) { // p1  p1.next
    p1 = p1.next;
    p2 = p2.next;
  }
  p2.next = null;

  return head;

}

const sumLastKElems = (head, k) => {

}

const copyLastK = (head, k) => {

}


let test = new Node(1);
test.next = new Node(2);
// test.next.next = new Node(3);
// test.next.next.next = new Node(4);
// test.next.next.next.next = new Node(5);

// console.log(secondToLast(test))

// console.log(sumLastKElems(test, 2));

let res = removeLastKElems(test, 2);
// console.log(res);

// let newHead = copyLastK(test, 2);
// while (newHead) {
//   console.log(newHead.value);
//   newHead = newHead.next
// }

while (res) {
  console.log(res.value);
  res = res.next
}