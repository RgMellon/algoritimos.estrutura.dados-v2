const Node = require("../../model/node");

class DublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

module.exports = DublyNode;
