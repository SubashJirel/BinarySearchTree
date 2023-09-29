import Node from './createNode.js';

export default class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    let node = this.root;
    if (node === null) {
      this.root = new Node(data);
    } else {
      this.searchTree(data, node);
    }
  }
  //At first node is { data: 50, left: null, right: null }
  searchTree(data, node) {
    if (data < node.data) {
      if (node.left === null) {
        node.left = new Node(data);
        return;
      } else {
        return this.searchTree(data, node.left); //data = 23 // node.left = 17
      }
    } else if (data > node.data) {
      // data=23 > node.data=17
      if (node.right === null) {
        node.right = new Node(data);
        return;
      } else {
        return this.searchTree(data, node.right);
      }
    } else {
      return null; // meaning if the data to be inserted is already there then just return null
    }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    console.log(current.data);
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    console.log(current.data);
  }
  isPresent(data) {
    let current = this.root;

    while (current) {
      if (current.data === data) return true;
      else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        // if node has no children
        if (node.left === null && node.right === null) {
          return null;
        }
        // no left children
        if (node.left === null) {
          return node.right;
        }

        //no right children
        if (node.right === null) {
          return node.left;
        }

        // if Node has both the children, then it gets a bit complicated
        let tempNode = node.right; // to delete node= 17 // store tempNode = node.right =23

        while (tempNode.left !== null) {
          tempNode = tempNode.left; // need to get the left most node of the right node of the node to be deleted
        }
        node.data = tempNode.data; // store that tempNode value to the node that is to be deleted
        node.right = removeNode(node.right, tempNode.data);
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}
