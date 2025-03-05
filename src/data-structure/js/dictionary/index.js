const defaultString = require("../utils/toDefaultString");
const ValuePair = require("./valuePair");

class Dictionary {
  constructor(toString = defaultString) {
    this.items = {};
    this.toString = toString;
  }

  /**
   * Add a new value on dictionary. If the key already exist your value will be replaced
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
    const tableKey = this.toString(key);
    this.items[tableKey] = new ValuePair(key, value);
  }

  /**
   * Remove a value of dictionary, using a key as a param
   * @param {string} key
   */
  remove(key) {
    const tableKey = this.toString(key);

    if (this.hasKey(key)) {
      delete this.items[tableKey];
      return true;
    }

    return false;
  }

  /**
   * Return true if exist the key
   * @param {string} key
   */
  hasKey(key) {
    const parsedKey = this.toString(key);

    if (this.items[parsedKey]) {
      return true;
    }

    return false;
  }

  /**
   * Get a value of dictionary passing key
   * @param {string} key
   */
  get(key) {
    if (this.hasKey(key)) {
      const currentItem = this.items[key];
      return currentItem.value;
    }

    return undefined;
  }

  keyValues() {
    return Object.values(this.items);
  }

  keys() {
    return Object.values(this.items).map((value) => value.key);
  }

  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }

  clear() {}

  size() {}

  isEmpty() {}

  forEach(callBack) {
    const valuePairs = this.keyValues();

    for (let i = 0; i < valuePairs.length; i++) {
      const result = callBack(valuePairs[i].key, valuePairs[i].value);

      if (result === false) break;
    }
  }
}

module.exports = Dictionary;
