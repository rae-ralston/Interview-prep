class Stack {
  constructor(capacity) {
    this.head = ""
    this.capacity = capacity
  }

  push(value) {
    if (this.size() >= this.capacity) {
      return console.log('Sorry, this stack is full for now')
    }
    this.head = this.head + '*' + value
    console.log(this.head)
  }

  pop() {
    let lastDelimiter = this.head.lastIndexOf('*')
    if (lastDelimiter === -1) {
      return console.log("Error: Empty Stack")
    }
    let wordToPop = this.head.slice(lastDelimiter + 1)
    this.head = this.head.slice(0, lastDelimiter)
    return wordToPop
  }

    peak() {
    let lastDelimiter = this.head.lastIndexOf('*')
    if (lastDelimiter === -1) {
      return console.log("Error: Empty Stack")
    }
    return this.head.slice(lastDelimiter + 1)
  }

  size() {
    return this.head.split('*').length - 1
  }

  contains(value) {
    return this.head.inludes(value)
  }

  until(value){
    let arr = this.head.split('*')
    let valIndex = arr.indexOf(value)
    if (valIndex === -1) {
      return console.log("Error: Value isn't in Stack")
    }
    return arr.length - valIndex
  }
}

let pile = new Stack(5)
pile.push('hi')
console.log(pile.capacity)
pile.push('woah')
pile.push('no')
pile.push('you')
pile.push('dont')
pile.push('blerg')
pile.push('yass')
pile.until('woah')
pile.until('hi')
pile.until('blerg')
pile.size()
