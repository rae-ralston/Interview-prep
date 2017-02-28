export default class Stack {
  constructor() {
    this.length = 0
    this.content = []
  }

  push(item) {
    if(this.content === null) this.content = []
    this.length += 1
    this.content.push(item)
  }

  pop() {
    if(this.length === 0) {
      this.content = null
    } else {
      this.length -= 1
      return this.content.splice(this.content.length - 1, 1).toString()
    }
  }

  peak() {
    return this.length === 0 
      ? null 
      : this.content.slice(this.content.length - 1).toString()
  }

  isEmpty() {
    return this.length === 0
  }

  Length() {
    return this.length
  }
}
