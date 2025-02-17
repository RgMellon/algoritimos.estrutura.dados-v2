const LinkedList = require("../linkedlist");
const Node = require("../model/node");

class CircularLinkedList extends LinkedList {
  insert(element, index) {
    const node = new Node(element);
    let current = this.head;

    if (index === 0) {
      if (!this.head) {
        node.next = node;
        this.head = node;
      } else {
        node.next = this.head;
        current = this.getElementAt(this.size() - 1);
        this.head = node;
        current.next = this.head;
      }
    } else {
      let prev = this.getElementAt(index - 1);
      node.next = prev.next;
      prev.next = node;
    }

    this.count++;
  }
}

module.exports = CircularLinkedList;

// 🚨 Qual o problema com essa abordagem?
// Seu código funciona corretamente apenas para inserção na posição 0 (caso index === 0).
// Se index !== 0, ele não insere na posição correta da lista. Ele sempre adiciona no início da lista, antes do head.

// Por exemplo, suponha que a lista seja:
// A → B → C → (volta para A)

// Se você tentar inserir X na posição 1, ou seja, entre A e B, seu código vai resultar em:
// X → A → B → C → (volta para X)
// Isso está incorreto, pois X deveria estar entre A e B, não no início.

// const prev = this.getElementAt(this.size() - 1);
// prev.next = node;
// node.next = current;
