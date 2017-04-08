class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  enqueue(data) {
    if (this.head === null) {
      this.head = new Node(data)
      this.length += 1
      return
    }

    if (this.head !== null && this.tail === null) {
      this.tail = new Node(data)
      this.head.next = this.tail
      this.tail.prev = this.head
      this.length += 1
      return
    }

    let temp = this.tail
    this.tail = new Node(data)
    this.tail.prev = temp
    temp.next = this.tail
    this.length += 1
    return this.tail
  }

  dequeue() {
    //add an option to dequeue a number of items
    if (this.head === null) {
      return console.log("Sorry, this is an empty queue")
    }
    let temp = this.head
    if (this.head !== null && this.tail === null) {
      this.head = null
      this.length -= 1
      return temp
    }
    this.head = this.head.next
    this.head.prev = null
    this.length -= 1
    return temp
  }

  peak() {
    return this.head
  }
}
