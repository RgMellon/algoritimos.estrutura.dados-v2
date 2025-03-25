const defaultString = require("../utils/toDefaultString");
const ValuePair = require("../dictionary/valuePair");

class HashTable {
  constructor(toStrFn = defaultString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  put(key, value) {
    if (!value) return false;
    if (!key) return false;

    const hash = this.hashCode(key);

    if (hash) {
      this.table[hash] = new ValuePair(key, value);
      return true;
    }

    return false;
  }

  get(key) {
    if (!key) return false;

    const position = this.table[this.hashCode(key)];
    return position.value === null ? undefined : position.value;
  }

  remove(key) {
    if (!key) return false;
    const parsedKey = this.hashCode(key);

    if (parsedKey) {
      delete this.table[parsedKey];

      return true;
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

    [...parsedKey].forEach((word) => {
      hash += parsedKey.charCodeAt(word);
    });

    return hash % 37;
  }
}

module.exports = HashTable;
