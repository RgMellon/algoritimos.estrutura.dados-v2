const StackArray = require("./stack-array");

describe("StackArray", () => {
  let stack;

  beforeEach(() => {
    stack = new StackArray();
  });

  it("should be able to add a new element on top of the list", () => {
    stack.push("Renan");
    stack.push("Joao");

    expect(stack.items).toHaveLength(2);
    expect(stack.items[0]).toBe("Renan");
  });

  it("should be able to pop an element on the list", () => {
    stack.push("Renan");
    stack.push("Gandalf");

    stack.pop();

    expect(stack.items).toHaveLength(1);
    expect(stack.items).toMatchObject(["Renan"]);
  });

  it("should be able to peek the last element on stack", () => {
    stack.push("Renan");
    stack.push("Gandalf");

    const lastElement = stack.peek();

    expect(lastElement).toBe("Gandalf");
  });

  it("should show if element is empty", () => {
    const isEmpty = stack.isEmpty();
    expect(isEmpty).toBeTruthy();
  });

  it("should show the size of stack", () => {
    stack.push("Renan");
    stack.push("Gandalf");
    stack.push("Maria");

    expect(stack.size()).toBe(3);
  });

  it("should be able to clear stack", () => {
    stack.push("Renan");
    stack.push("Gandalf");
    stack.push("Maria");

    stack.clear();

    expect(stack.items).toHaveLength(0);
  });
});
