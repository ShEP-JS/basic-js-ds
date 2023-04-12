const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  queue = null;
  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (this.queue == null) {
      this.queue = new ListNode(value);
    } else {
      let curParent = this.queue;
      while (curParent.next != null) {
        curParent = curParent.next;
      }

      let node = new ListNode(value);
      curParent.next = node;
    }
  }

  dequeue() {
    if (this.queue == null) {
      return null;
    }
    let first = this.queue;
    this.queue = first.next;
    return first.value;
  }
}

module.exports = {
  Queue,
};
