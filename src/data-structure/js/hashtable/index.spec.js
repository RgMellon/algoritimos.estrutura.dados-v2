const HashTable = require("./index");

describe("HashTable", () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  it("should create a hash key", () => {
    const key = hashTable.hashCode("Renan");
    expect(key).toBe(3);
  });

  it("should add new item o hash-table", () => {
    const wasAdded = hashTable.put("renan", "Renan");

    expect(wasAdded).toBeTruthy();
  });

  it("should get item in hash-table", () => {
    hashTable.put("renan", "Renan");
    const result = hashTable.get("renan");

    expect(result).toBe("Renan");
  });

  it("should remove item in hash-table", () => {
    hashTable.put("renan", "Renan");

    const result = hashTable.remove("renan");

    expect(result).toBeTruthy();
  });
});
