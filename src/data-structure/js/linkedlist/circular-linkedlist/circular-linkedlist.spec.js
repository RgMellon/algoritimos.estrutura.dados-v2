const CircularLinkedList = require("./circular-linkedlist");

describe("CircularLinkedList", () => {
  let circularLinkedList;

  beforeEach(() => {
    circularLinkedList = new CircularLinkedList();
  });

  it("should add first element when list is empty", () => {
    circularLinkedList.insert("A", 0);

    expect(circularLinkedList.head.element).toBe("A");
    expect(circularLinkedList.head.next.element).toBe("A");
  });

  it("should add first element when list already had a head", () => {
    circularLinkedList.insert("A", 0);
    circularLinkedList.insert("B", 1);
    circularLinkedList.insert("C", 2);

    circularLinkedList.insert("X", 0);

    expect(circularLinkedList.head.element).toBe("X");
    expect(circularLinkedList.head.next.element).toBe("A");
  });

  it("should add a element on list", () => {
    circularLinkedList.insert("A", 0);
    circularLinkedList.insert("B", 1);

    expect(circularLinkedList.head.element).toBe("A");
    expect(circularLinkedList.head.next.element).toBe("B");
    expect(circularLinkedList.head.next.next.element).toBe("A");
  });

  it("should add a element on list when list is more than 3", () => {
    circularLinkedList.insert("A", 0);
    circularLinkedList.insert("B", 1);
    circularLinkedList.insert("C", 2);

    circularLinkedList.insert("X", 1);

    expect(circularLinkedList.head.element).toBe("A");

    expect(circularLinkedList.head.next.element).toBe("X");
  });
});
