class Set {
  constructor() {
    this.items = {};
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    } else {
      return false;
    }
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }

    return false;
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.values(this.items);
  }

  union(otherSet) {
    const newUnionSet = new Set();

    this.values().forEach((value) => {
      newUnionSet.add(value);
    });

    otherSet.values().forEach((value) => {
      newUnionSet.add(value);
    });

    return newUnionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new Set();

    otherSet.values().forEach((element) => {
      if (this.has(element)) {
        intersectionSet.add(element);
      }
    });

    console.log(intersectionSet.values());
    return intersectionSet;
  }
}

module.exports = Set;
