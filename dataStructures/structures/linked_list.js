class Node {
  constructor(data) {
    this.data = data
    this.pointer = null
  }

  data() {
    return this.data
  }

  pointer() {
    return this.pointer
  }

}

export default class LinkedList {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  getHeadNode() {
    return this.first
  }

  getTailNode() {
    return this.last
  }

  contains(element) {
    if(!this.isEmpty){
      let node = this.getHeadNode()
      let nextNode
      
      do {
        nextNode = node
        node.data() === element ? true : node = node.pointer()
      }
      while (nextNode.pointer !== null) 
    }
    return false
  }

  find(element) {
    if(!this.isEmpty()){
      let node = this.getHeadNode()
      let newNode
      do {
        nextNode = node
        node.data() === element ? node : node = node.pointer()
      } 
      while (nextNode.pointer !== null)
    }
    return -1
  }

  findWithPrev(element) {
    // go through each node
    // holder for prev node
    do {

    }
    while()
  }

  insert(element) {
    let node = new Node(element)

    if(this.isEmpty) {
      this.first = node
      this.last = node
    } else {
      let previous = this.last
      previous.pointer = node
      this.last = node
    }
    this.size += 1
  }

  insertFirst(element) {
    let node = new Node(element)

    if(this.isEmpty) {
      this.first = node
      this.last = node
    } else {
      node.pointer = this.first
      this.first = node
    }
    this.size +=1
  }



// linkedList.insertBefore("bananas", "apples") // Inserts a node (with data "apples") before the first node containing "bananas"
  insertBefore(element, data) {
    if(this.find() !== -1) {

    }
  }

// linkedList.insertAfter("apples", "bananas")  // Inserts a node (with data "bananas") after the first node containing "apples"
  insertAfter(element, data) {
    let foundElement = this.find()
    if(foundElement !== -1){
      let newNode = new Node(data)
      let holder = foundElement.pointer()
      foundElement.pointer = newNode
      newNode.pointer = holder
    }
  }

// Removes the tail node from the list
  remove() {
    let last = this.getTailNode

  }

// Removes the head node from the list
  removeFirst() {
    let first = this.getHeadNode
    this.head = first.pointer
  }

  isEmpty() {
    return this.first === null && this.last === null
  }

// Returns the size of the list (number of nodes)
  size() {

  }

  clear() {
    this.first = null
    this.last = null
    this.size = 0
  }
}