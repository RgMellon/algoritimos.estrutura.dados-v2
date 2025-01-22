const Queue = require("../queue");

function hotPotato(elements, round) {
  const queue = new Queue();
  const eliminatedList = [];

  elements.forEach((element) => {
    queue.enqueue(element);
  });

  while (queue.size() > 1) {
    for (let index = 0; index < round; index++) {
      queue.enqueue(queue.dequeue());
    }

    eliminatedList.push(queue.dequeue());
  }

  return {
    winner: queue.dequeue(),
    eliminatedList,
  };
}

module.exports = hotPotato;
