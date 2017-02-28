import {expect} from 'chai'
import PriorityQueue from '../structures/priority_queue'

describe.only('PriorityQueue', () => {
  let Pqueue
  beforeEach(() => Pqueue = new PriorityQueue())

  it('is a function', () => {
    expect(PriorityQueue).to.be.a('function')
    expect(Pqueue.enqueue).to.be.a('function')
    expect(Pqueue.dequeue).to.be.a('function')
    expect(Pqueue.front).to.be.a('function')
    expect(Pqueue.back).to.be.a('function')
    expect(Pqueue.isEmpty).to.be.a('function')
    expect(Pqueue.Length).to.be.a('function')
  })

  context('#enqueue', () => {
    it('adds elements to a queue', () => {
      Pqueue.enqueue('hi', 1)
      expect(Pqueue.content).to.eql({1:'hi'})
      expect(Pqueue.length).to.equal(1)

      Pqueue.enqueue('hello', 5)
      expect(Pqueue.content).to.eql({1:'hi', 5:'hello'})
      expect(Pqueue.length).to.equal(2)
      Pqueue.enqueue('nope', 5)
    })
  })

  context('#dequeue', () => {
    it('returns null for an empty queue', () => {
      let empty = new PriorityQueue()

      empty.dequeue()
      expect(empty.content).to.equal(null)
      expect(empty.length).to.equal(0)
    })

    it('returns the top element and decrament length', () => {
      Pqueue.enqueue('blues', 2)
      Pqueue.enqueue('hip-hop', 1)
      Pqueue.enqueue('opera', 10)
      expect(Pqueue.dequeue()).to.eql({ priority: '1', queueItem: 'hip-hop' })
      expect(Pqueue.length).to.equal(2)
      expect(Pqueue.content[1]).to.equal(undefined)
    })
  })

  context('#front', () => {
    it('returns first item', () => {
      Pqueue.enqueue('classical', 10)
      Pqueue.enqueue('jazz', 6)
      Pqueue.enqueue('psytrance', 1)
      expect(Pqueue.front()).to.eql({ priority: '1', queueItem: 'psytrance' })
      expect(Pqueue.length).to.equal(3)
    })
  })

  context('#back', () => {
    it('returns last item', () => {
      Pqueue.enqueue('classical', 10)
      Pqueue.enqueue('jazz', 6)
      Pqueue.enqueue('psytrance', 1)
      expect(Pqueue.back()).to.eql({ priority: '10', queueItem: 'classical' })
      expect(Pqueue.length).to.equal(3)
    })
  })

  context('#isEmpth', () => {
    it('returns true for empty queue', () => {
      expect(Pqueue.isEmpty()).to.equal(true)
    })

    it('returns false for non-empty queue', () => {
      Pqueue.enqueue('no, you\'re wrong', 1)
      expect(Pqueue.isEmpty()).to.equal(false)
    })
  })

  context('#length', () => {
    it('returns 0 for empty queue', () => {
      expect(Pqueue.Length()).to.equal(0)
    })

    it('returns 1 for 1 unit queue', () => {
      Pqueue.enqueue('bye boi',1)
      expect(Pqueue.Length()).to.equal(1)
    })

    it('returns 2 for 2 unit queue', () => {
      Pqueue.enqueue('i said good day', 2)
      Pqueue.enqueue('sir i said good day!', 3)
      expect(Pqueue.Length()).to.equal(2)
    })
  })
})