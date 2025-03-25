const HashTableSepareteChanning = require(".");

describe("HashTableSepareteChanning", () => {
  let hashTableSepareteChanning;

  beforeEach(() => {
    hashTableSepareteChanning = new HashTableSepareteChanning();
  });

  it("should create a hash key", () => {
    const key = hashTableSepareteChanning.hashCode("Renan");
    expect(key).toBe(19);
  });

  it("should add new item o hash-table with colisions", () => {
    hashTableSepareteChanning.put("Jonathan", "Jonathan");
    hashTableSepareteChanning.put("Jamie", "Jamie");
    hashTableSepareteChanning.put("Sue", "Sue");

    expect(hashTableSepareteChanning.table[5].head.element.value).toBe(
      "Jonathan"
    );
  });

  it("should get a value passing a key", () => {
    hashTableSepareteChanning.put("Jonathan", "Jonathan");
    hashTableSepareteChanning.put("Jamie", "Jamie");
    hashTableSepareteChanning.put("Sue", "Sue");

    const result = hashTableSepareteChanning.get("Jonathan");

    expect(result).toBe("Jonathan");
  });

  it("should remove item in hash-table and linked-list", () => {
    hashTableSepareteChanning.put("Jonathan", "Jonathan");
    hashTableSepareteChanning.put("Jamie", "Jamie");
    hashTableSepareteChanning.put("Sue", "Sue");

    const result = hashTableSepareteChanning.remove("Jamie");

    const getAfterDelete = hashTableSepareteChanning.get("Jamie");

    expect(result).toBeTruthy();
    expect(getAfterDelete).toBeFalsy();
    // console.log(hashTableSepareteChanning.table, "o");
  });
});
