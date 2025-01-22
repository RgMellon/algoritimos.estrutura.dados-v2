const hotPotato = require("./hotPotato");

const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];

describe("Queue/hotpotato", () => {
  it("should eliminate the first item on queue", () => {
    const result = hotPotato(names, 7);
    expect(result.winner).toBe("John");
  });

  it("should return the list of eliminated", () => {
    const result = hotPotato(names, 7);
    expect(result.eliminatedList).toHaveLength(4);
  });

  it("should return the first element eliminated", () => {
    const result = hotPotato(names, 2);
    expect(result.eliminatedList[0]).toBe("Camila");
  });
});
