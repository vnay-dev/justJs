class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }
  size() {
    return this.count;
  }
  min() {
    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
  max() {
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }
  contains(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === val) {
        return true;
      }
      if (val < currentNode) {
        currentNode = currentNode.left;
      }
      else{
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  insert(val) {
    let newNode = new Node(val);
    this.count++;

    const searchTree = (node) => {
      if (val < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      } else if (val > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
  }

  dfsInOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      result.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  dfsPreOrder() {
    let result = [];

    const traverse = (node) => {
      result.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  dfsPostOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  bfs() {
    let result = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length) {
      let currentNode = queue.shift();
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return result;
  }
}

const bst = new BinarySearchTree(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

bst.size();

bst.min();
bst.max();

bst.contains(2);
bst.contains(9);

// in-order: 2, 3, 12, 15, 28, 36, 39
bst.dfsInOrder();

// pre-order: 15, 3, 2, 12, 36, 28, 39
bst.dfsPreOrder();

// post-order: 2, 12, 3, 28, 39, 36, 15
bst.dfsPostOrder();

// 15, 3, 36, 2, 12, 28, 39
bst.bfs();

console.log(bst);
