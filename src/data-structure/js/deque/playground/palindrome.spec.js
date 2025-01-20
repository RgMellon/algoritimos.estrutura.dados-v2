const palindrome = require("./palindrome");

describe("Deque/Palindrome", () => {
  it("should return truthy when word is palindrome", () => {
    const isPalindrome = palindrome("rennner");

    expect(isPalindrome).toBeTruthy();
  });

  it("should return falsy when word is NOT a palindrome", () => {
    const isPalindrome = palindrome("joao");

    expect(isPalindrome).toBeFalsy();
  });

  it("should return falsy when has only one word", () => {
    const isPalindrome = palindrome("j");

    expect(isPalindrome).toBeFalsy();
  });
});
