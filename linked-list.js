/*
issue: Implement data structure - Linked List
solution:
  firstNode variable would store
  reference to the first node that would
  contain { data: number, next: node }
*/

class Node {
  data;
  next;

  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  head;

  constructor(data = null) {
    this.head = new Node(data);
  }

  appendNode(data) {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    const newNode = new Node(data);
    currentNode.next = newNode;
  }

  prependNode(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }
}
