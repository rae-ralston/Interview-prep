// const stack = new Stack()
// stack.push("foo") // push an element (the string "foo") to the top of the stack.
// stack.pop()       // returns and removes the top element in the stack or null if the stack is empty.
// stack.peek()      // returns the top element in the stack or null if the stack is empty.
// stack.isEmpty()   // returns true if the stack is empty or false if not.
// stack.length()    // returns the number of elements in the stack.

export default class Stack {
  constructor() {
    this.length = 0
    this.content = []
  }

  push(item) {
    if(this.content === null) this.content = []
    this.length += 1
    this.content.push(item)
    console.log('this.content is ', this.content)
  }

  pop() {
    console.log('is this.lenggth 0? ', this.length === 0)
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
      : this.content.slice(this.content.length - 1)
  }

  isEmpty() {
    return this.length === 0
  }

  length() {
    return this.length
  }
}
