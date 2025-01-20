class Deque {
  constructor() {
    this.items = {};
    this.lowestCount = 0;
    this.count = 0;
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
      return;
    }

    if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
      return;
    }

    for (let i = this.count; i > 0; i--) {
      this.items[i] = this.items[i - 1];
    }

    this.count++;
    this.lowestCount = 0;
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

  removeFront() {
    if (this.lowestCount < 0) return undefined;

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  removeBack() {
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
}

module.exports = Deque;
