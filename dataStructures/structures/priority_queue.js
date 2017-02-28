
// content = [
//   {priority: 1, word:'hi'}
//   {priority: 2, word:'pizza'}
// ]
// const pQueue = new PriorityQueue()
// pQueue.enqueue("pizza", 100) // adds an element with priority (number) to the back of the queue.
// pQueue.front()               // returns the front element (highest priority) in the queue or null if the queue is empty.
// pQueue.back()                // returns the back element (lowest priority) in the queue or null if the queue is empty.
// pQueue.dequeue()             // returns and removes the front element (highest priority) in the queue or null if the queue is empty.
// pQueue.isEmpty()             // returns true if the queue is empty or false if not.
// pQueue.length()              // returns the number of elements in the queue.

// content = {
//   1: 'hi',
//   2: 'pizza'
// }

export default class PriorityQueue {
  constructor() {
    this.content = {}
    this.length = 0
  }

  enqueue(element, priority) {
    if(this.content === null) {
      this.content = {}
    }
    if(typeof priority !== 'number') {
      console.log("please enter a priority number")
    }
    this.content[priority] = element
    this.length += 1
    console.log('this.content', this.content)
  }

  dequeue() {
    if(this.length === 0) {
      this.content = null
      return this.content
    }
    this.length -= 1

    let sortedKeys = Object.keys(this.content)
    let temp = {priority: sortedKeys[0], queueItem: this.content[sortedKeys[0]]}
    delete this.content[sortedKeys[0]]
    return temp
  }

  front() {
    if(this.length === 0) {
      this.content = null
      return this.content
    }
    let sortedKeys = Object.keys(this.content)
    return {
      priority: sortedKeys[0], 
      queueItem: this.content[sortedKeys[0]]
    }
  }

  back() {
    if(this.length === 0) {
      this.content = null
      return this.content
    }
    let sortedKeys = Object.keys(this.content)
    return {
      priority: sortedKeys[sortedKeys.length - 1], 
      queueItem: this.content[sortedKeys[sortedKeys.length - 1]]
    }
  }

  isEmpty() {
    return this.length === 0
  }

  Length() {
    return this.length
  }
}