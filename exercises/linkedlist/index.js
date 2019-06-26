// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

  constructor(data, next = null) {
    this.data = data;
    this.next = next;
    return this;
  }

}

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(data) {
      this.head = new Node(data, this.head);
  }

  size() {
    let size = 0;
    let currentNode = this.head;
    while(currentNode) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insertlast() {
    const last = this.getLast();
    if(last) {
      last
    } else {

    }
  }
}

module.exports = {
  Node,
  LinkedList
};
