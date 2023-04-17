const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(x) {
    this.data = x;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.data = null;
  }

  root() {
    if (this.data !== null) {
      return this.data
    } else {
        return null
      }
  }

  add(data) {
    if (this.data === null) {
      this.data = new Node(data);
      return this.data;
    }
    let current = this.data;
    while (current !== null) {
      if (current.data === data) {
        return current.data;
      }
      if (data < current.data) {
        if (current.left === null) {
          current.left = new Node(data);
          return current.left;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = new Node(data);
          return current.right;
        }
        current = current.right;
      }
    }
  }

  min() {
    if (this.data === null) {
      return null;
    }
    let current = this.data;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (this.data === null) {
      return null;
    }
    let current = this.data;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  has(data) {
    let  current = this.data;
    while (current.data !== data) {
      if(data < current.data) {
        current = current.left;
      } else {
        current = current.right;
        }
      if (current === null){
        return false
      }
    }
    return true;
  }

  find(data) {
    let  current = this.data;
    while (current.data !== data) {
      if(data < current.data) {
        current = current.left;
      } else {
        current = current.right;
        }
      if (current === null){
        return null
      }
    }
    return current;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};