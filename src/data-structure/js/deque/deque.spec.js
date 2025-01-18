const Deque = require("./deque");

describe("Deque", () => {
  let deque;

  beforeEach(() => {
    deque = new Deque();
  });

  it("should add new element when is the first element", () => {
    deque.addFront("Pedro");

    expect(deque.items[0]).toEqual("Pedro");
  });

  it("should add element in front", () => {
    deque.addFront("Pedro"); // 0 -> 1
    deque.addFront("Renan"); // 1 -> 2
    deque.addFront("Joao"); // 2 -> 3
    deque.addFront("Maria");

    expect(deque.items[0]).toEqual("Maria");
  });

  it("should add on front after add back", () => {
    deque.addBack("Renan");
    deque.addBack("Melo");
    deque.addFront("Juliana");

    expect(deque.items[0]).toEqual("Juliana");
  });

  it("should peek the last element", () => {
    deque.addBack("Renan");
    deque.addBack("Melo");
    deque.addFront("Maria");

    const result = deque.peekBack();

    expect(result).toEqual("Melo");
  });

  it("should peek the first element", () => {
    deque.addBack("Renan");
    deque.addBack("Melo");

    const result = deque.peekFront();

    expect(result).toEqual("Renan");
  });
});
