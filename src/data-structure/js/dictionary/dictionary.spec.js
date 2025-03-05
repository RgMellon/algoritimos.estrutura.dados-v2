const Dictionary = require("./index");

describe("Dictionary", () => {
  let dictionary;

  beforeEach(() => {
    dictionary = new Dictionary();
  });

  it("should add a new item on dictionary", () => {
    dictionary.set("renan", "rgmelo94@gmail.com");

    expect(dictionary.items["renan"].key).toBe("renan");
    expect(dictionary.items["renan"].value).toBe("rgmelo94@gmail.com");
  });

  it("should verify if item already exists", () => {
    dictionary.set("renan", "rgmelo94@gmail.com");

    const exists = dictionary.hasKey("renan");

    expect(exists).toBeTruthy();
  });

  it("should remove a value of dictionary passing key ", () => {
    dictionary.set("renan", "rgmelo94@gmail.com");

    const removed = dictionary.remove("renan");

    expect(removed).toBeTruthy();
  });

  it("should get a value passing key", () => {
    dictionary.set("renan", "rgmelo94@gmail.com");

    const value = dictionary.get("renan");

    expect(value).toBe("rgmelo94@gmail.com");
  });

  it("should get the valuePairs", () => {
    dictionary.set("renan", "rgmelo94@gmail.com");
    const result = dictionary.keyValues();

    expect(result).toHaveLength(1);
  });

  it("should return the originals keys", () => {
    dictionary.set("renan", "rgmelo94@gmail.com");
    const keys = dictionary.keys();

    expect(keys).toEqual(["renan"]);
  });

  it("should return an array of values", () => {
    dictionary.set("renan", "rgmelo94@gmail.com");
    dictionary.set("teste", "teste@gmail.com");
    const values = dictionary.values();

    expect(values).toEqual(["rgmelo94@gmail.com", "teste@gmail.com"]);
  });

  it("should iterate in key valus of dictionary", () => {
    dictionary.set("renan", "rgmelo94@gmail.com");
    dictionary.set("teste", "teste@gmail.com");

    const callBack = jest.fn();

    dictionary.forEach(callBack);

    expect(callBack).toHaveBeenCalledTimes(2);
  });

  it("should stop loop when is falsy", () => {
    dictionary.set("a", "rgmelo94@gmail.com");
    dictionary.set("b", "teste@gmail.com");

    const callback = jest.fn().mockImplementation((key, value) => {
      return key !== "a"; // Para quando encontrar "b"
    });

    dictionary.forEach(callback);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith("a", "rgmelo94@gmail.com");
    expect(callback).not.toHaveBeenCalledWith("b", "teste@gmail.com");
  });
});
