import {expect} from 'chai'
import Queue from '../structures/queue'

describe('Queue', () => {
  let queue
  beforeEach(() => queue = new Queue())

  it('is a function', () => {
    expect(Queue).to.be.a('function')
    expect(queue.enqueue).to.be.a('function')
    expect(queue.dequeue).to.be.a('function')
    expect(queue.front).to.be.a('function')
    expect(queue.back).to.be.a('function')
    expect(queue.isEmpty).to.be.a('function')
    expect(queue.Length).to.be.a('function')
  })

  context('#enqueue', () => {
    it('adds elements to a queue', () => {
      queue.enqueue('hi')
      expect(queue.content).to.eql(['hi'])
      expect(queue.length).to.equal(1)

      queue.enqueue('hello')
      expect(queue.content).to.eql(['hi', 'hello'])
      expect(queue.length).to.equal(2)
    })
  })

  context('#dequeue', () => {
    it('returns null for an empty queue', () => {
      let empty = new Queue()

      expect(empty.dequeue()).to.equal(null)
      expect(empty.content).to.eql([])
      expect(empty.length).to.equal(0)
    })

    it('returns the top element and decrament length', () => {
      queue.enqueue('blues')
      queue.enqueue('hip-hop')
      queue.enqueue('opera')
      expect(queue.dequeue()).to.equal('blues')
      expect(queue.length).to.equal(2)
    })
  })

  context('#front', () => {
    it('returns first item', () => {
      queue.enqueue('classical')
      queue.enqueue('jazz')
      queue.enqueue('psytrance')
      expect(queue.front()).to.equal('classical')
      expect(queue.length).to.equal(3)
    })
  })

  context('#back', () => {
    it('returns last item', () => {
      queue.enqueue('classical')
      queue.enqueue('jazz')
      queue.enqueue('psytrance')
      expect(queue.back()).to.equal('psytrance')
      expect(queue.length).to.equal(3)
    })
  })

  context('#isEmpth', () => {
    it('returns true for empty queue', () => {
      expect(queue.isEmpty()).to.equal(true)
    })

    it('returns false for non-empty queue', () => {
      queue.enqueue('no, you\'re wrong')
      expect(queue.isEmpty()).to.equal(false)
    })
  })

  context('#length', () => {
    it('returns 0 for empty queue', () => {
      expect(queue.Length()).to.equal(0)
    })

    it('returns 1 for 1 unit queue', () => {
      queue.enqueue('bye boi')
      expect(queue.Length()).to.equal(1)
    })

    it('returns 2 for 2 unit queue', () => {
      queue.enqueue('i said good day')
      queue.enqueue('sir i said good day!')
      expect(queue.Length()).to.equal(2)
    })
  })
})