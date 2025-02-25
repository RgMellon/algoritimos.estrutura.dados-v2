const DublyLinkedList = require("./dubly-linkedList");

describe("LinkedList/DublyLinkedList", () => {
  let dublyLinkedList;

  beforeEach(() => {
    dublyLinkedList = new DublyLinkedList();
  });

  it("should add element on head", () => {
    dublyLinkedList.insertAt("Renan", 0);

    expect(dublyLinkedList.head.element).toBe("Renan");
    expect(dublyLinkedList.tail.element).toBe("Renan");
  });

  it("should replace a head element if already exist a 0 position", () => {
    dublyLinkedList.insertAt("Cadeira", 0);
    dublyLinkedList.insertAt("Renan", 0);

    expect(dublyLinkedList.head.element).toBe("Renan");
    expect(dublyLinkedList.head.next.prev.element).toBe("Renan");
    expect(dublyLinkedList.tail.element).toBe("Cadeira");
  });

  it("should be able to add new element on end of list", () => {
    dublyLinkedList.insertAt("Renan", 0);
    dublyLinkedList.insertAt("Hikari", 0);

    dublyLinkedList.insertAt("kira", 2);

    expect(dublyLinkedList.tail.element).toBe("kira");
  });

  it("should be able to add new element in the midle of list", () => {
    dublyLinkedList.insertAt("Renan", 0);
    dublyLinkedList.insertAt("Hikari", 1);
    dublyLinkedList.insertAt("kira", 2);
    dublyLinkedList.insertAt("Joao", 1);

    expect(dublyLinkedList.tail.element).toBe("kira");
  });

  it("should be able to remove the first element on list", () => {
    dublyLinkedList.insertAt("Renan", 0);
    dublyLinkedList.insertAt("Hikari", 1);
    dublyLinkedList.insertAt("kira", 2);

    dublyLinkedList.removeAt(0);

    expect(dublyLinkedList.head.element).toBe("Hikari");
    expect(dublyLinkedList.head.prev).toBeUndefined();
    expect(dublyLinkedList.head.next.element).toBe("kira");
  });

  it("should be able to remove the first element on list when exist just one element", () => {
    dublyLinkedList.insertAt("Renan", 0);

    console.log(dublyLinkedList);
    dublyLinkedList.removeAt(0);

    expect(dublyLinkedList.head).toBeUndefined();
  });

  it("should be able to remove last element on list", () => {
    dublyLinkedList.insertAt("Renan", 0); //1
    dublyLinkedList.insertAt("Hikari", 1); //2
    dublyLinkedList.insertAt("kira", 2); //3

    dublyLinkedList.removeAt(2);
    expect(dublyLinkedList.tail.element).toBe("Hikari");
  });

  it("should be able to remove midle element on list", () => {
    dublyLinkedList.insertAt("Renan", 0); //1  -> 0
    dublyLinkedList.insertAt("Hikari", 1); //2  -> 1
    dublyLinkedList.insertAt("kira", 2); //3 -> 2
    dublyLinkedList.insertAt("Jose", 3); //4 -> 3

    dublyLinkedList.removeAt(1);

    expect(dublyLinkedList.head.next.element).toBe("kira");
  });
});
