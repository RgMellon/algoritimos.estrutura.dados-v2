const HashTableLinearProbingMoveElements = require("./index");

describe("HashTableLinearProbingMoveElements", () => {
  let hashTableLinearProbingMoveElements;

  beforeEach(() => {
    hashTableLinearProbingMoveElements =
      new HashTableLinearProbingMoveElements();
  });

  it("should create a hash key", () => {
    const key = hashTableLinearProbingMoveElements.hashCode("Sue");
    expect(key).toBe(5);
  });

  it("should add new item o hash-table and if exist should register in the next slot", () => {
    hashTableLinearProbingMoveElements.put("Jonathan", "Jonathan");
    hashTableLinearProbingMoveElements.put("Jamie", "Jamie");
    hashTableLinearProbingMoveElements.put("Sue", "Sue");

    expect(hashTableLinearProbingMoveElements.table[5].key).toBe("Jonathan");
    expect(hashTableLinearProbingMoveElements.table[6].key).toBe("Jamie");
    expect(hashTableLinearProbingMoveElements.table[7].key).toBe("Sue");
  });

  it("should get item in hash-table", () => {
    hashTableLinearProbingMoveElements.put("Jonathan", "Jonathan");
    hashTableLinearProbingMoveElements.put("Jamie", "Jamie");
    hashTableLinearProbingMoveElements.put("Sue", "Sue");

    const result = hashTableLinearProbingMoveElements.get("Jamie");

    expect(result.value).toBe("Jamie");
  });

  it.only("should remove item in hash-table-linear-probing", () => {
    hashTableLinearProbingMoveElements.put("Jonathan", "Jonathan");
    hashTableLinearProbingMoveElements.put("Jamie", "Jamie");
    hashTableLinearProbingMoveElements.put("Sue", "Sue");

    const result = hashTableLinearProbingMoveElements.remove("Jonathan");

    console.log("---result", hashTableLinearProbingMoveElements, result);
    // expect(result).toBeTruthy();
  });
});
