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

    const value = this.values();
    const otherValues = otherSet.values();

    let smallerValue = value;
    let biggestValue = otherValues;

    if (smallerValue.length - biggestValue.length > 0) {
      smallerValue = biggestValue;
      biggestValue = smallerValue;
    }

    smallerValue.forEach((element) => {
      if (biggestValue.includes(element)) {
        intersectionSet.add(element);
      }
    });

    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new Set();

    const values = this.values();

    values.forEach((element) => {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });

    return differenceSet;
  }

  isSubSetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }

    let isSubSet = false;
    isSubSet = this.values().every((element) => {
      return otherSet.has(element);
    });

    return isSubSet;
  }
}

module.exports = Set;
