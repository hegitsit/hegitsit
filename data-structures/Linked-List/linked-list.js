/*
// What are linked list ?

*/

// Implementation of a Linked List

class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // traverse linked list
  traverseLinkedList(head) {
    if (!head) return null;
    let current = head;

    while (current) {
      current = current.next;
    }
    return head;
  }

  // add to front linked list
  addToFront(value) {
    // does ll exist?
    this.head = new Node(value, this.head);
    this.size++;
  }

  // add to end linked list
  addToEnd(value) {
    // does ll exist?
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value)
    this.size++;
  }

  // add at index to linked list
  addAtIndex(value, index) {
    // does ll exist?
    let counter = 0;
    let current = this.head;
    let previous;
    let node = new Node(value)

    // out of bounds
    if (index > 0 && index > this.size) {
      return ll.addToEnd(value)
    }
    // first element
    if (index <= 0) {
      this.head = new Node(value, this.head);
      return;
    }

    while (counter < index) {
      previous = current;
      current = current.next;
      counter++;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  // remove at from linked list
  removeAtIndex(index) {
    // does ll exist?
    //out of bounds
    if (index > 0 && index > this.size) return;

    let current = this.head;
    let count = 0;
    let previous;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next
    }
    this.size--;
  }

  // get element at index in linked list

  getElementAt(index) {
    // does ll exist?
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.value);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  removeLast() {
    // does ll exist?
    let current = this.head;
    let previous;

    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
  }


  // remove target value/values from linked list
  // // Time and Space - is Time 0(n) and space is 0(n) or 0(1)
  removeTarget(node, target) {
    if (!node) return null;
    let sentinel = new Node();
    sentinel.next = node;
    let current = sentinel;

    while (current.next) {
      if (current.next.value === target) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    return sentinel.next;
  }

  // reverse linked list

  reverseLinkedList() {
    let current = this.head;
    if (!current) return null;

    let reverse = null;

    while (current) {
      let temp = current.next;
      current.next = reverse;
      reverse = current;
      current = temp;
    }
    return reverse;
  }

  removeDuplicates2(head, target) {
    while (head && head.value === target) {
      head = head.next;
    }

    let current = head;

    while (current && current.next) {
      if (current.next.value === target) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    return head;
  }

  removeDuplicates() {
    let currentNode = this.head;
    if (!currentNode) return null;

    while (currentNode) {
      let nextNode = currentNode.next;

      while (nextNode && nextNode.value !== currentNode.value) {
        nextNode = nextNode.next;
      }
      currentNode.next = nextNode;
      currentNode = nextNode;
    }

    return this.head;
  }

  // print list
  printLinkedList() {
    let current = this.head;

    while (current) {
      console.log(current.value)
      current = current.next;
    }
  }
};

const ll = new LinkedList();
ll.addToFront(100);
ll.addToFront(200);
ll.addToFront(300);
ll.addToFront(400);
ll.addToFront(400);
ll.addToEnd(500)
ll.addToEnd(500)
ll.addToEnd(500)
ll.addToEnd(600)
ll.addAtIndex(700, 0)
ll.addAtIndex(800, -12)
ll.addAtIndex(900, 8)
ll.addAtIndex(1000, 112)
ll.addAtIndex(1000, 112)
ll.addAtIndex(1000, 112)
ll.addAtIndex(1000, 112)
ll.addAtIndex(1000, 112)
ll.addAtIndex(1, 99)
// ll.removeAtIndex(0)
// ll.removeLast()
// ll.getElementAt(3)
// ll.printLinkedList()
// ll.reverseLinkedList()
ll.removeDuplicates()
ll.printLinkedList()