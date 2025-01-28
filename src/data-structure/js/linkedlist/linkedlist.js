const isEqual = require("../utils/isEqual");
const Node = require("./model/node");

class LinkedList {
  constructor(equalFn = isEqual) {
    this.equalFn = equalFn;
    this.head = undefined;
    this.count = 0;
  }

  push(element) {
    if (!this.head) {
      this.head = new Node(element);
    } else {
      let currentNode = this.head;
      while (currentNode?.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = new Node(element);
    }
    this.count++;
  }

  removeAt(positionToRemove) {
    if (positionToRemove === 0) {
      this.head = this.head.next;
    } else {
      let prev = this.#getElementAt(positionToRemove - 1);
      let current = prev.next;

      prev.next = current?.next;
    }

    this.count--;
  }

  insertAt(element, position) {
    const newNode = new Node(element);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let prev = this.#getElementAt(position - 1);
      let current = prev.next;

      newNode.next = current;

      prev.next = newNode;
    }

    this.count++;
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (element == current.element) {
        return index;
      }

      index++;
      current = current.next;
    }

    return -1;
  }

  #getElementAt(findIndex) {
    let node = this.head;

    for (let index = 0; index < findIndex; index++) {
      node = node.next;
    }

    return node;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }
}

module.exports = LinkedList;
