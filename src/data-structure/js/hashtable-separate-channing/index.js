const defaultString = require("../utils/toDefaultString");
const ValuePair = require("../dictionary/valuePair");
const LinkedList = require("../linkedlist/linkedlist");

class HashTableSepareteChanning {
  constructor(toStrFn = defaultString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  put(key, value) {
    if (!value || !key) return false;

    const hash = this.hashCode(key);
    const alreadyExist = this.table[hash];

    if (!alreadyExist) {
      this.table[hash] = new LinkedList();
    }

    const valuePair = new ValuePair(key, value);
    this.table[hash].push(valuePair);

    return false;
  }

  get(key) {
    if (!key) return false;
    const hashKey = this.hashCode(key);
    const linkedList = this.table[hashKey];

    if (linkedList == undefined || !linkedList.size()) return;

    let current = linkedList.getHead();

    while (current.element) {
      if (current.element.key === key) {
        return current.element.value;
      }

      current = current.next;
    }

    return undefined;
  }

  remove(key) {
    if (!key) return false;
    const hash = this.hashCode(key);
    const linkedList = this.table[hash];
    let current = linkedList.getHead();

    if (!!linkedList && linkedList.size() > 0) {
      while (current) {
        if (current.element.key === key) {
          linkedList.remove(current.element);
          delete this.table[hash];
          return true;
        }
        current = current.next;
      }
    }

    return false;
  }

  hashCode(value) {
    return this.#makeLoseLoseHash(value);
  }

  #makeLoseLoseHash(value) {
    if (typeof value === "number") {
      return value;
    }

    const parsedKey = this.toStrFn(value);
    let hash = 0;

    for (let i = 0; i < parsedKey.length; i++) {
      hash += parsedKey.charCodeAt(i);
    }

    return hash % 37;
  }
}

module.exports = HashTableSepareteChanning;
