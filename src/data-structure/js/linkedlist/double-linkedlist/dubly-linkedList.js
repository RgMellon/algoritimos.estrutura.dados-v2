const LinkedList = require("../linkedlist");
const DublyNode = require("./model/dubly-node");

class DublyLinkedList extends LinkedList {
  constructor() {
    super();
    this.tail = undefined;
  }

  insertAt(element, position) {
    const node = new DublyNode(element);
    let current = this.head;

    if (position === 0) {
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = current;
        current.prev = node;
        this.head = node;
      }
    } else if (this.count === position) {
      current = this.tail;
      current.next = node;
      node.prev = current;

      this.tail = node;
    } else {
      const prev = this.getElementAt(position - 1);
      current = prev.next;
      prev.next = node;
      current.prev = node;
      node.next = current;
      node.prev = prev;
    }

    this.count++;
  }

  removeAt(position) {
    let current = this.head;

    if (position === 0) {
      this.head = current.next;
      if (this.count === 1) {
        this.tail = undefined;
      } else {
        this.head.prev = undefined; // ver
      }
    } else if (position === this.count - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = undefined;
    } else {
      current = this.getElementAt(position);
      let prev = current.prev;

      prev.next = current.next;
      current.next.prev = prev;
    }

    this.count--;
    return current.element;
  }
}

module.exports = DublyLinkedList;
