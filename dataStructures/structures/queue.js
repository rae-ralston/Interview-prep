export default class Queue {
  constructor() {
    this.content = []
    this.length = 0
  }

  enqueue(element) {
    this.content.push(element)
    this.length += 1
  }

  dequeue() {
    if(this.length === 0) {return null}
    this.length -= 1
    return this.content.splice(0,1).toString()
  }

  front() {
    if(this.length === 0) {return null}
    return this.content.slice(0, 1).toString()
  }

  back() {
    if(this.length === 0) {return null}
    return this.content.slice(this.content.length - 1).toString()
  }

  isEmpty() {
    return this.length === 0
  }

  Length() {
    return this.length
  }
}