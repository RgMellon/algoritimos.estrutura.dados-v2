const Queue = require("./queue");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it("should be able to add new elemento on tail", () => {
    queue.enqueue("Renan");
    queue.enqueue("Melo");

    expect(queue.count).toBe(2);
    expect(queue.items[0]).toBe("Renan");
  });

  it("should be able to dequeu elemento on head", () => {
    queue.enqueue("Renan");
    queue.enqueue("Melo");

    const result = queue.dequeue();

    expect(queue.items[queue.lowestCount]).toBe("Melo");
    expect(result).toBe("Renan");
  });

  it("should peek the first element on queue", () => {
    queue.enqueue("Renan");
    queue.enqueue("Melo");
    queue.enqueue("Kira");

    const result = queue.peek();

    expect(result).toBe("Renan");
  });

  it("should peek new first element on queue after remove the first element", () => {
    queue.enqueue("Renan");
    queue.enqueue("Melo");
    queue.enqueue("Kira");

    queue.dequeue();

    const result = queue.peek();

    expect(result).toBe("Melo");
  });

  it("should return truthy if there is no item on queue", () => {
    const result = queue.isEmpty();
    expect(result).toBeTruthy();
  });

  it("should return empty after remove item on queue", () => {
    queue.enqueue("Renan");
    queue.dequeue();

    const result = queue.isEmpty();
    expect(result).toBeTruthy();
  });

  it("should return empty after clear items", () => {
    queue.enqueue("Renan");
    queue.enqueue("Melo");
    queue.enqueue("Jose");

    queue.clear();

    const result = queue.isEmpty();
    expect(result).toBeTruthy();
    expect(queue.count).toBe(0);
    expect(queue.lowestCount).toBe(0);
  });
});
