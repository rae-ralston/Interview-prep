// const queue = new Queue()
// queue.enqueue("foo") // adds an element (the string "foo") to the back of the queue.
// queue.dequeue()      // returns and removes the front element in the queue or null if the queue is empty.
// queue.front()        // returns the front element in queue or null if the queue is empty.
// queue.back()         // returns the back element in the queue or null if the queue is empty.
// queue.isEmpty()      // returns true if the queue is empty or false if not.
// queue.length()       // returns the number of elements in the queue

export default class Queue {
  constructor() {
    this.content = []
    this.length = 0
  }

  enqueue(element) {
    if(this.content === null) this.content = []
    this.content.push(element)
    this.length += 1
  }

  dequeue() {
    if(this.length === 0) {
      this.content = null
      return this.content
    }
    this.length -= 1
    return this.content.splice(0,1).toString()
  }

  front() {
    if(this.length === 0) {
      this.content = null
      return this.content
    }
    return this.content.slice(0, 1).toString()
  }

  back() {
    if(this.length === 0) {
      this.content = null
      return this.content
    }
    return this.content.slice(this.content.length - 1).toString()
  }

  isEmpty() {
    return this.length === 0
  }

  Length() {
    return this.length
  }
}