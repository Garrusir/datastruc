class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  insert(data){
    var newNode = new Node(data);
    if (this.root === null){
      this.root = newNode;
    }
    else this.insertNode(this.root, newNode)
  }
  insertNode(node, newNode){
    if (newNode.data < node.data){
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode)
    }
    else{
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode)
    }
  }
  remove(data){
    this.root = this.removeNode(this.root, data)
  }
  removeNode(node, key){
    if (node === null) return null;
    else if (key < node.data){
      node.left = this.removeNode(node.left, key);
      return node;
    }
    else if (key > node.data){
      node.right = this.removeNode(node.right, key);
      return node;
    }
    else{
      if (node.left === null && node.right === null){
        node = null;
        return null;
      }
      else if (node.left === null){
        node = node.right;
        return node;
      }
      else if (node.right === null){
        node = node.left;
        return node;
      }
      var aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data); 
      return node; 
    }
  }
  findMinNode(node){
    if(node.left === null) return node; 
    else return this.findMinNode(node.left); 
  }
  depthFirstSearch(startNode, searchNode){
    if (startNode !== null){
      if (searchNode === startNode.data){
        console.log("Found node " + searchNode);
        console.log("Data:");
        console.log(startNode);
        return
      }
      if (searchNode < startNode.data) var next = startNode.left;
      if (searchNode > startNode.data) var next = startNode.right;
      console.log(startNode);
      this.depthFirstSearch(next, searchNode);
    }
  }
  breadthFirstSearch(startNode, searchNode){
    if (startNode!==null){
      var queue = [];
      queue.push(startNode);
      while (queue.length > 0){
        var currentNode = queue[0];
        if (searchNode === currentNode.data){
          console.log("Found node " + searchNode);
          console.log("Data:");
          console.log(currentNode);
          break;
        }
        if (currentNode.left !== null) queue.push(currentNode.left);
        if (currentNode.right !== null) queue.push(currentNode.right);
        console.log(currentNode);
        queue.shift();
      }
    }
  }
}
window.onload = () =>{
  var BST = new BinarySearchTree();
  BST.insert(15);
  BST.insert(25); 
  BST.insert(10); 
  BST.insert(7); 
  BST.insert(22); 
  BST.insert(17); 
  BST.insert(13); 
  BST.insert(5); 
  BST.insert(9); 
  BST.insert(27); 
  BST.remove(10);
  //        15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      7  13 22  27 
//     / \    / 
//    5   9  17  
  // console.log(BST);
  BST.breadthFirstSearch(BST.root, 9);
  // BST.depthFirstSearch(BST.root, 9);
}