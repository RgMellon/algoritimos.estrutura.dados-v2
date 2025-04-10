const defaultString = require("../utils/toDefaultString");
const ValuePair = require("../dictionary/valuePair");

class HashTableLinearProbingMoveElements {
  constructor(toStrFn = defaultString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  put(key, value) {
    if (!value) return false;
    if (!key) return false;

    const position = this.hashCode(key);

    if (!this.table[position]) {
      this.table[position] = new ValuePair(key, value);
      return true;
    }

    let nextPosition = position + 1;

    while (this.table[nextPosition] != undefined) {
      nextPosition = nextPosition + 1;
    }

    this.table[nextPosition] = new ValuePair(key, value);
    return true;
  }

  get(key) {
    if (!key) return false;

    const position = this.hashCode(key);

    if (
      this.table[position] !== undefined &&
      this.table[position].key === key
    ) {
      return this.table[position];
    }

    let index = position + 1;

    while (this.table[index] !== undefined && this.table[index].key !== key) {
      index++;
    }

    if (this.table[index] !== undefined && this.table[index].key === key) {
      return this.table[index];
    }

    return false;
  }

  remove(key) {
    if (!key) return false;
    const position = this.hashCode(key);

    if (
      this.table[position] !== undefined &&
      this.table[position].key === key
    ) {
      delete this.table[position];
      this.verifyRemoveSideEffect(key, position);
      return true;
    }

    let nextPosition = position + 1;
    while (
      this.table[nextPosition] != undefined &&
      this.table[nextPosition].key !== key
    ) {
      nextPosition++;
    }

    if (
      this.table[nextPosition] != undefined &&
      this.table[nextPosition].key === key
    ) {
      delete this.table[nextPosition];
      this.verifyRemoveSideEffect(key, position);
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
    let amountHash = 0;

    for (let i = 0; i < parsedKey.length; i++) {
      amountHash += parsedKey.charCodeAt(i);
    }

    return amountHash % 37;
  }

  verifyRemoveSideEffect(keyOfRemovedElement, removedPosition) {
    // console.log("key", { key, removedPosition });
    const hash = this.hashCode(keyOfRemovedElement);
    console.log({ hash });

    let index = removedPosition + 1;

    console.log({ index });

    while (this.table[index] != undefined) {
      const hashOfNextRemovedPosition = this.hashCode(this.table[index].key);
      console.log(this.table[index], { hashOfNextRemovedPosition });
      //aqui retorna 5, pois a hash do Jamie e 5

      if (
        hashOfNextRemovedPosition <= hash ||
        hashOfNextRemovedPosition <= removedPosition
      ) {
        this.table[removedPosition] = this.table[index];

        delete this.table[index];
        removedPosition = index;
      }

      index++;
    }
  }
}

module.exports = HashTableLinearProbingMoveElements;
