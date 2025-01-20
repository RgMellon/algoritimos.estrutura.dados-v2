const Deque = require("../deque");

function palindrome(word) {
  let size = word.length;

  const deque = addWordOnDeque(word, size);
  let isPalindrome = false;

  if (size == 1) return undefined;

  while (size > 0 && !isPalindrome) {
    const frontValue = deque.removeFront();
    const backValue = deque.removeBack();

    if (!frontValue || !backValue) {
      return;
    }

    if (frontValue === backValue) {
      console.log(frontValue, backValue, "insidee");
      isPalindrome = true;
    }

    size--;
  }

  return isPalindrome;
}

function addWordOnDeque(word, size) {
  const deque = new Deque();

  for (let i = 0; i < size; i++) {
    deque.addBack(word[i]);
  }

  return deque;
}

module.exports = palindrome;
