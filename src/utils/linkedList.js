// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToTheEnd(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length += 1;
  }

  // eslint-disable-next-line consistent-return
  insertInPosition(position, value) {
    if (position < 0 || position > this.length) return 'Incorrect value of position';

    const node = new Node(value);
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let prev = null;
      for (let index = 0; index < position; index += 1) {
        prev = current;
        current = current.next;
      }
      prev.next = node;
      node.next = current;
    }
    this.length += 1;
  }

  getNodeByPosition(position) {
    if (position < 0 || position > this.length) return 'Incorrect value of position';
    let current = this.head;
    for (let index = 0; index < position; index += 1) {
      current = current.next;
    }
    return current.value;
  }

  removeFromPosition(position) {
    if (position < 0 || position > this.length) return 'Incorrect value of position';
    let currentNode = this.head;
    if (position === 0) {
      this.head = currentNode.next;
    } else {
      let prev = null;
      for (let index = 0; index < position; index += 1) {
        prev = currentNode;
        currentNode = currentNode.next;
      }
      prev.next = currentNode.next;
    }
    this.length -= 1;
    return currentNode.value;
  }

  getIndexByValue = (value) => {
    let currentNode = this.head;
    let result = null;
    for (let index = 0; index < this.length; index += 1) {
      if (currentNode.value === value) {
        result = index;
        break;
      }
      currentNode = currentNode.next;
    }
    return result;
  }

  removeElementByValue = (value) => {
    return this.removeFromPosition(this.getIndexByValue(value));
  }

  isEmpty = () => {
    return this.length === 0;
  }

  getLength = () => {
    return this.length;
  }

  print = () => {
    let current = this.head;
    while (current) {
      // eslint-disable-next-line no-console
      console.log(current.value); // output the value of the node
      current = current.next;
    }
  }

  getValue = () => {
    if (!this.getLength()) {
      return [];
    }
    const array = [];
    let current = this.head;

    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }
}

export default new LinkedList();
