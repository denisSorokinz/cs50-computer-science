/*
issue: Implement tree data structure
solution:
  Tree class would contain root of type Node
  Node: data, left, right
*/

class Node {
  data;
  left = null;
  right = null;

  constructor(data) {
    this.data = data;
  }
}

class Tree {
  root;

  constructor(data = null) {
    this.root = new Node(data);
  }

  addNode(data) {
    let current = this.root;
    let next = current;
    while (next !== null) {
      console.log("[test]");
      current = next;
      if (data < current.data) next = current.left;
      if (data > current.data) next = current.right;
    }

    const newNode = new Node(data);
    if (data < current.data) current.left = newNode;
    if (data > current.data) current.right = newNode;
  }
}

const t = new Tree(10);
t.addNode(20);
t.addNode(5);

console.log(t);
