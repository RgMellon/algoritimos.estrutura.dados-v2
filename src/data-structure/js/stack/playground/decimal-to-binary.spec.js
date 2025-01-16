const decimalToBinary = require("./decimal-to-binary");

describe("DecimalToBinary", () => {
  it("expect to convert a decimal number to a binary", () => {
    const result = decimalToBinary(100);
    expect(result).toBe("1100100");
  });
});
