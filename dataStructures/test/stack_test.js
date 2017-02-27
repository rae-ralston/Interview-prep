import {expect} from 'chai'
import Stack from '../structures/stack'

describe('Stack', () => {
  let stack
  beforeEach(() => stack = new Stack())

  it('is a function', () => {
    expect(Stack).to.be.a('function')
    expect(stack.push).to.be.a('function')
    expect(stack.pop).to.be.a('function')
    expect(stack.peak).to.be.a('function')
    expect(stack.isEmpty).to.be.a('function')
  })

  context('#push', () => {
    it('adds elements to a stack', () => {
      stack.push('hi')
      expect(stack.content).to.eql(['hi'])
      expect(stack.length).to.equal(1)

      stack.push('hello')
      expect(stack.content).to.eql(['hi', 'hello'])
      expect(stack.length).to.equal(2)
    })
  })

  context('#pop', () => {
    it('returns null for an empty stack', () => {
      let empty = new Stack()

      empty.pop()
      expect(empty.content).to.equal(null)
      expect(empty.length).to.equal(0)
    })

    it('returns the top element and decrament length', () => {
      stack.push('blues')
      stack.push('hello')
      expect(stack.pop()).to.equal('hello')
      expect(stack.length).to.equal(1)
    })
  })

  context('#peak', () => {
    it('returns null for empty stack', () => {
      expect(stack.peak()).to.equal(null)
      expect(stack.length).to.equal(0) 
    })
    
    it('returns top element but it will stay in array', () => {
      stack.push('hi')
      stack.push('hello')
      expect(stack.peak()).to.equal('hello')
      expect(stack.length).to.equal(2)
    })
  })

  context('#isEmpth', () => {
    it('returns true for empty stack', () => {
      expect(stack.isEmpty()).to.equal(true)
    })

    it('returns false for non-empty stack', () => {
      stack.push('hello')
      expect(stack.isEmpty()).to.equal(false)
    })
  })

  context('#length', () => {
    it('returns 0 for empty stack', () => {
      expect(stack.Length()).to.equal(0)
    })

    it('returns 1 for 1 unit stack', () => {
      stack.push('hello')
      expect(stack.Length()).to.equal(1)
    })

    it('returns 2 for 2 unit stack', () => {
      stack.push('hello')
      stack.push('oh hai')
      expect(stack.Length()).to.equal(2)
    })
  })
})