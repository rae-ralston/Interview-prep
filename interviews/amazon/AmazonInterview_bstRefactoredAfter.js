class node () {
  constructor(value) {
    this.value = value
    this.right = null // less
    this.left = null  // more
  }
}

export default class BST () {
  constructor() {
    this.root = null
  }
    
  add(num) {
    if(typeof num !== 'number') {console.log('Numbers only please.')}
    if(this.root === null) {this.root = new node(num)}
    let currentNode = this.root

    const addValToTree = (num, currentNode) => {   
      if(currentNode.value < num && currentNode.right === null){
        currentNode.right = new node(num)
      } else if (currentNode.value > num && currentNode.left === null) {
        currentNode.left = new node(num)
      } else if (currentNode.left !== null && currentNode.value > num) {
        currentNode = currentNode.left
        addValToTree(num, currentNode)
      } else if (currentNode.value < num && currentNode.right !== null) {
        currentNode = currentNode.root.right
        addValToTree(num, currentNode)
      }     
    }
    addValToTree(num, currentNode)
  }
    
  search(num) {
    let currentNode = this.root

    const searchBST = (num, currentNode) => {
      if(this.root.value === num) return true
      if(num > this.root.value) {
        currentNode = this.root.left
        searchBST(num, currentNode)
      } else {
        currentNode = this.root.right
        searchBST(num, currentNode)
      }
      return false
    }
    searchBST(num, currentNode)
  }
}