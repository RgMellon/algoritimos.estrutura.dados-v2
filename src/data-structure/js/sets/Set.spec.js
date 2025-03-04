const Set = require("./Set");

describe("Set", () => {
  it("should add element", () => {
    const set = new Set();

    set.add("Renan");

    expect(set.items["Renan"]).toBeTruthy();
  });

  it("should verify if  element exist", () => {
    const set = new Set();

    set.add("Renan");

    const result = set.has("Renan");

    expect(result).toBeTruthy();
  });

  it("should delete element", () => {
    const set = new Set();
    set.add("Renan");

    const result = set.delete("Renan");

    expect(result).toBeTruthy();
  });

  it("should clear", () => {
    const set = new Set();

    set.add("Renan");
    set.add("Melo");

    set.clear();

    expect(set.items).toEqual({});
  });

  it("should show the size", () => {
    const set = new Set();

    set.add("Renan");
    set.add("Melo");

    const size = set.size();

    expect(size).toBe(2);
  });

  it("should show values", () => {
    const set = new Set();

    set.add("Renan");
    set.add("Melo");

    const values = set.values();

    expect(values).toEqual(["Renan", "Melo"]);
  });

  it("it should Union two sets", () => {
    const setA = new Set();
    setA.add(1);
    setA.add(2);
    setA.add(3);

    const setB = new Set();
    setB.add(3);
    setB.add(4);
    setB.add(5);

    const newSetResult = setA.union(setB);

    expect(newSetResult.values()).toEqual([1, 2, 3, 4, 5]);
  });

  it("should intersect two sets", () => {
    const setA = new Set();
    setA.add(1);
    setA.add(2);

    const setB = new Set();
    setB.add(2);
    setB.add(4);
    setB.add(5);
    setB.add(6);

    const newResult = setA.intersection(setB);

    expect(newResult.values()).toEqual([2]);
  });

  it("should show difference two sets", () => {
    const setA = new Set();
    setA.add(1);
    setA.add(2);
    setA.add(3);

    const setB = new Set();
    setB.add(2);
    setB.add(3);
    setB.add(4);

    const newResult = setA.difference(setB);

    expect(newResult.values()).toEqual([1]);
  });

  it("should be a subset of set", () => {
    const setA = new Set();
    setA.add(1);
    setA.add(2);

    const setB = new Set();
    setB.add(1);
    setB.add(2);
    setB.add(4);

    const result = setA.isSubSetOf(setB);

    expect(result).toBeTruthy();
  });
});
