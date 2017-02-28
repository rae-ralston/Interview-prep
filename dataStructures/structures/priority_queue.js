
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
// content = [
//   {priority: 1, element:'hi'}
//   {priority: 2, element:'pizza'}
// ]

export default class PriorityQueue {
  constructor() {
    this.content = []
    this.length = 0
  }

  enqueue(element, priority) {
    if(this.content === null) {
      this.content = []
    }
    if(typeof priority !== 'number') {
      console.log("please enter a priority number")
    }
    if(this.content.length === 0) {
      this.content.push({priority, element})
    }
    let content = this.content

    let sortedPriorities = content
      .reduce((priorityArray, blob) => {
        priorityArray.push(blob.priority)
        return priorityArray
      },[])
      .sort((a,b) => a - b)

    let isInserted = false
    let holder, secondHolder
    let dequeueBlob = content
      .reduce((firstPriorities, blob, index, collection) => {
        if(blob.priority <= priority && collection[i + 1].priority > priority) {
          holder = collection[i]
          secondHolder = collection[i + 1]
          collection[i] = {priority, element}

        }
        return firstPriorities
      },[])
    for(let i = 0;i < this.content.length)
    
    this.length += 1
  }

  dequeue() {
    if(this.length === 0) {
      this.content = null
      return this.content
    }
    this.length -= 1
    
    let dequeueSplice = this.content.splice(dequeueBlob[0].i, 1)
    dequeueSplice = dequeueSplice[0]
    delete dequeueSplice.i
    return dequeueSplice
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