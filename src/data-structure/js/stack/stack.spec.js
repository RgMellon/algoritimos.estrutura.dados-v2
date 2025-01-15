const Stack = require("./stack");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("should be able to add a new element on top of the list", () => {
    stack.push("Renan");
    stack.push("Joao");

    expect(stack.count).toBe(2);
    expect(stack.items[0]).toBe("Renan");
  });

  it("should be able to pop an element on the list", () => {
    stack.push("Renan");
    stack.push("Gandalf");

    const result = stack.pop();

    expect(stack.count).toBe(1);
    expect(stack.items[0]).toBe("Renan");
    expect(result).toBe("Gandalf");
  });

  it("should be able to peek the last element on stack", () => {
    stack.push("Renan");
    stack.push("Gandalf");

    const lastElement = stack.peek();

    expect(lastElement).toBe("Gandalf");
  });

  it("should NOT be able to pop an empty element", () => {
    const result = stack.pop();
    expect(result).toBeFalsy();
  });

  it("should no be able to push empty element", () => {
    stack.push();

    expect(this.count).toBe(undefined);
  });

  it("should NOT be able to peek an empty element", () => {
    const result = stack.peek();
    expect(result).toBeFalsy();
  });

  it("should show if element is empty", () => {
    const isEmpty = stack.isEmpty();
    expect(isEmpty).toBeTruthy();
  });

  it("should show the size of stack", () => {
    stack.push("Renan"); //1
    stack.push("Gandalf"); //2
    stack.push("Maria"); //3

    expect(stack.size()).toBe(3);
  });

  it("should be able to clear stack", () => {
    stack.push("Renan");
    stack.push("Gandalf");
    stack.push("Maria");

    stack.clear();

    expect(stack.count).toBe(0);
    expect(stack.items).toEqual({});
  });
});
