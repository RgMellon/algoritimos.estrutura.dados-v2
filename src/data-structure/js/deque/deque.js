class Deque {
  constructor() {
    this.items = {};
    this.lowestCount = 0;
    this.count = 0;
  }

  addFront(element) {
    if (this.count === 0) {
      this.addBack(element);
      return;
    }

    for (let i = this.count; i > 0; i--) {
      this.items[i] = this.items[i - 1];
    }

    this.count++;
    this.items[0] = element;
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  peekBack() {
    return this.items[this.count - 1];
  }

  peekFront() {
    return this.items[this.lowestCount];
  }
}

module.exports = Deque;
