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
}
