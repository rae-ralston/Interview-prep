import {expect} from 'chai'

describe('stack', () => {
  it('is a function', () => {
    expect(stack).to.be.a('function') //class?
    expect(stack.push).to.be.a('function')
    expect(stack.pop).to.be.a('function')
    expect(stack.peak).to.be.a('function')
    expect(stack.isEmpty).to.be.a('function')
    expect(stack.length).to.be.a('function')
  })

  beforeEach(() => let stack = new Stack())

  it('will return an empty stack', () => {
    expect(stack()).to.equal([])
  })

  it('.push will return an stack with those elements in it', () => {
    stack.push('hi')
    stack.push('hello')
    expect(stack[0]).to.equal('hi')
    expect(stack[1]).to.equal('hello')
  })

  it('.pop will return the top element and decrament length', () => {
    stack.push('hi')
    stack.push('hello')
    expect(stack.pop()).to.equal('hello')
    expect(stack).should.have.length(1)
  })

  it('.pop will return null for an empty stack', () => {
    expect(stack.pop()).to.equal(null)
    expect(stack).should.have.length(0) // ??
  })

  it('.peak will return top element but it will stay in array', () => {
    stack.push('hi')
    stack.push('hello')
    expect(stack.peak()).to.equal('hello')
    expect(stack).should.have.length(2)
  })

  it('.peak will return null for empty stack', () => {
    expect(stack.peak()).to.equal(null)
    expect(stack).should.have.length(0) // ??
  })

  it('.isEmpty will return true for empty stack', () => {
    expect(stack.isEmpty()).to.equal(true)
  })

  it('.isEmpty will return false for non-empty stack', () => {
    stack.push('hello')
    expect(stack.isEmpty()).to.equal(false)
  })

  it('.length will return 0 for empty stack', () => {
    expect(stack.length()).to.equal(0)
  })

  it('.length will return 1 for 1 unit stack', () => {
    stack.push('hello')
    expect(stack.length()).to.equal(1)
  })

  it('.length will return 2 for 2 unit stack', () => {
    stack.push('hello')
    stack.push('oh hai')
    expect(stack.length()).to.equal(2)
  })
})