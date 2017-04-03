class Node {
  constructor(value){
    this.value = value
    this.pointer = null
  }
}


class Stack {
  constructor() {
    this.head = null
    this.size = 0
  }

  push(value) {
    if(this.head === null) {
      this.head = new Node(value)
    }
    let tmp = this.head
    this.head = new Node(value)
    this.head.pointer = tmp
    this.size += 1
  }

  pop() {
    if(this.head === null) {
      return console.log("Error: Empty Stack")
    }
    let tmp = this.head
    this.size -= 1
    if(this.head.pointer === null) {
      this.head = null
      return tmp
    }
    this.head = this.head.pointer
    return tmp
  }

  size() {
    return this.size
  }
}

