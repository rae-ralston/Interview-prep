export default class PriorityQueue {
  constructor() {
    this.content = []
    this.length = 0
  }

  enqueue(element, priority) {
    if(priority < 1 || typeof priority !== 'number') {
      throw new Error('This Priority isn\'t valid')
    }
    this.length += 1
    this.content.push({priority, element})
    this.content = this.content.sort((a, b) => a.priority > b.priority)
  }

  dequeue() {
    if(this.length === 0) {return null}
    this.length -= 1
    const dequeueValue = this.content.splice(0, 1)
    return dequeueValue[0]
  }

  front() {
    return this.content[0] || null
  }

  back() {
    return this.content[this.content.length - 1] || null
  }

  isEmpty() {
    return this.length === 0
  }

  Length() {
    return this.length
  }
}