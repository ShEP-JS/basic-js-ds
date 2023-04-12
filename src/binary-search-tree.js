const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  rootNode = null;
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.insertNode(this.rootNode, newNode);
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

  has(data) {
    let result = this.find(data);
    if (result != null) {
      return true;
    } else {
      return false;
    }
  }

  find(data) {
    let curNode = this.rootNode;
    while (curNode != null) {
      if (data === curNode.data) {
        return curNode;
      }
      if (data < curNode.data) {
        curNode = curNode.left;
      } else {
        curNode = curNode.right;
      }
    }

    return null;
  }

  remove(data) {
    let parent = null;
    let curNode = this.rootNode;

    while (curNode != null && curNode.data != data) {
      parent = curNode;
      if (data < curNode.data) {
        curNode = curNode.left;
      } else {
        curNode = curNode.right;
      }
    }

    if (curNode == null) {
      return;
    }

    if (curNode.left == null && curNode.right == null) {
      if (curNode != this.rootNode) {
        if (parent.left === curNode) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      } else {
        this.rootNode = null;
      }
    } else if (curNode.left != null && curNode.right != null) {
      let nodeToReplace = this.minNode(curNode.right);
      let replaceData = nodeToReplace.data;
      this.remove(replaceData);
      curNode.data = replaceData;
    } else {
      let child = curNode.left != null ? curNode.left : curNode.right;
      if (curNode != this.rootNode) {
        if (curNode === parent.left) {
          parent.left = child;
        } else {
          parent.right = child;
        }
      } else {
        this.rootNode = child;
      }
    }
  }

  min() {
    let mNode = this.minNode(this.rootNode);
    return mNode.data;
  }

  minNode(curNode) {
    if (curNode == null) {
      return null;
    }

    while (curNode.left != null) {
      curNode = curNode.left;
    }
    return curNode;
  }

  max() {
    if (this.rootNode == null) {
      return null;
    }

    let curNode = this.rootNode;
    while (curNode.right != null) {
      curNode = curNode.right;
    }
    return curNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
