const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor () {
    this.stack = [];
    this.length = 0;
  }
  push(element) {
    if (this.length === 0) {
      this.head = element;
    } else {
        this.stack.push(this.head);
        this.head = element;
      }
    this.length += 1;
  }
  pop() {
   if (this.length === 0) {
    return "Error: there is no elements in stack!";
    } else {
        const current = this.head;
        this.head = this.stack.pop();
        this.length -=1;
        return current;
      }
  }
  peek() {
    if (this.length === 0) {
      return "Error: there is no elements in stack!";
    } else {
        return this.head;
    }
  }
}

module.exports = {
  Stack
};
