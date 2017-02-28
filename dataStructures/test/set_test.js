import {expect} from 'chai'
import Set from '../structures/set'

describe.only('Set', () => {
  let set
  beforeEach(() => set = new Set([]))

  it('is a function', () => {
    expect(Set).to.be.a('function')
    expect(set.add).to.be.a('function')
    // expect(set.deset).to.be.a('function')
    // expect(set.front).to.be.a('function')
    // expect(set.back).to.be.a('function')
    // expect(set.isEmpty).to.be.a('function')
    // expect(set.Length).to.be.a('function')
  })

  context('.add', () => {
    it('adds elements to a set', () => {
      set.add(1)
      expect(set.content).to.eql([1])
      expect(set.content.length).to.equal(1)

      set.add(2)
      expect(set.content).to.eql([1, 2])
      expect(set.content.length).to.equal(2)
    })

    it('doesn\'t add doubles', () => {
      set.add(2)
      set.add(2)
      expect(set.content).to.eql([2])
      expect(set.content.length).to.equal(1)
    })
  })

  context('.isEmpty', () => {
    it('returns true for an empty set', () => {
      expect(set.isEmpty()).to.equal(true)
      set.add(2)
      expect(set.isEmpty()).to.equal(false)
    })
  })

  context('.contains', () => {
    it('returns true if set contains element', () => {
      expect(set.contains(2)).to.equal(false)
      set.add(2)
      expect(set.contains(2)).to.equal(true)
    })
  })

  context('.remove', () => {
    it('returns removes an elemnt from a set if it exists', () => {
      set.add(2)
      set.add(3)
      set.remove(2)
      expect(set.contains(2)).to.equal(false)
      expect(set.contains(3)).to.equal(true)
    })
  })

  context('.forEach', () => {
    it('passes each element in sequence to a callback', () => {
      set.add(2)
      set.add(3)
      let holder = []
      set.forEach(elem => holder.push(elem + 1))
      expect(holder).to.eql([3,4])
    })
  })

  context('.size', () => {
    it('returns 0 for empty set', () => {
      expect(set.size()).to.equal(0)
    })

    it('returns 1 for 1 unit set', () => {
      set.add('bye boi')
      expect(set.size()).to.equal(1)
    })

    it('returns 2 for 2 unit set', () => {
      set.add('i said good day')
      set.add('sir i said good day!')
      expect(set.size()).to.equal(2)
    })
  })

  context('.union', () => {
    it('creates a union of two arrays', () => {
      set.add(2)
      set.add(3)
      expect(set.union([3,4,5])).to.eql([2,3,4,5])
    })
  })

  context('.intersect', () => {
    it('creates a union of two arrays', () => {
      set.add(2)
      set.add(3)
      expect(set.intersect([3,4,5])).to.eql([3])
    })
  })
})