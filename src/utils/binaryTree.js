/* eslint-disable */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }


  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  findMinNode() {
    const findMethod = (node, result) => {
      if (node.left === null) {
        return node.data;
      } else {
        return findMethod(node.left, result)
      }
    }
    return findMethod(this.root, '')
  }

  getRootNode() {
    return this.root;
  }


  // insertNode(node, newNode) {
  // if (newNode.data < node.data) {
  //   if (node.left === null) {
  //     node.left = newNode;
  //   } else {
  //     this.insertNode(node.left, newNode);
  //   }
  // } else {
  //   if (node.right === null) {
  //     node.right = newNode;
  //   } else {
  //     this.insertNode(node.right, newNode);
  //   }
  // }
  // }

  alertData = () => {
    console.log('alertData = ', this.root);
  }

  getTree = () => {
    return this.root;
  }
  // function to be implemented
  // insert(data)
  // remove(data)

  // Helper function
  // findMinNode()
  // getRootNode()
  // inorder(node)
  // preorder(node)
  // postorder(node)
  // search(node, data)
}

export default BinarySearchTree;
