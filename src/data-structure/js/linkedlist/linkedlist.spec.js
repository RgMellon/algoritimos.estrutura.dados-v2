const LinkedList = require("./linkedlist");

describe("LinkedList", () => {
  it("should add an element on the end of list when list is empty", () => {
    const ll = new LinkedList();
    ll.push("Renan");

    expect(ll.head.element).toBe("Renan");
  });

  it("should add an element on the end of list", () => {
    const ll = new LinkedList();
    ll.push("Renan");
    ll.push("Gandalf");
    ll.push("Marco");

    expect(ll.head.next.next.element).toBe("Marco");
    expect(ll.count).toBe(3);
  });

  it("should remove the first element when position is 0", () => {
    const ll = new LinkedList();
    ll.push("Renan");
    ll.removeAt(0);

    expect(ll.count).toBe(0);
    expect(ll.head).toBeFalsy();
  });

  it("should remove the element passing index", () => {
    const ll = new LinkedList();
    ll.push("Renan");
    ll.push("Marcio");
    ll.push("Juca");
    ll.push("Mario");
    ll.removeAt(1);

    expect(ll.head.next.element).toBe("Juca");
  });

  it("should add an element passing position", () => {
    const ll = new LinkedList();
    ll.push("Renan");
    ll.push("Marcio");
    ll.insertAt("Juca", 0);

    expect(ll.head.element).toBe("Juca");
  });

  it("should be able to get the index of element", () => {
    const ll = new LinkedList();
    ll.push("Renan");
    ll.push("Marcio");
    ll.push("Maria");

    expect(ll.indexOf("Maria")).toBe(2);
  });

  it("should be able to remove a element", () => {
    const ll = new LinkedList();
    ll.push("Renan");
    ll.push("Marcio");
    ll.push("Maria");

    ll.remove("Maria");

    expect(ll.head.next.next).toBeFalsy();
  });

  it("should be able to get size", () => {
    const ll = new LinkedList();
    ll.push("Renan");
    ll.push("Marcio");
    ll.push("Maria");

    expect(ll.size()).toBe(3);
  });

  it("should be able to get the head of list", () => {
    const ll = new LinkedList();
    ll.push("Renan");
    ll.push("Marcio");
    ll.push("Maria");

    expect(ll.getHead().element).toBe("Renan");
  });
});
