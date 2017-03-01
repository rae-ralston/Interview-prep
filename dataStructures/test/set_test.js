import {expect} from 'chai'
import Set from '../structures/set'

describe.only('Set', () => {
  let set
  beforeEach(() => set = new Set([]))

  it('is a function', () => {
    expect(Set).to.be.a('function')
    expect(set.add).to.be.a('function')
    expect(set.isEmpty).to.be.a('function')
    expect(set.contains).to.be.a('function')
    expect(set.remove).to.be.a('function')
    expect(set.forEach).to.be.a('function')
    expect(set.size).to.be.a('function')
    expect(set.union).to.be.a('function')
    expect(set.intersect).to.be.a('function')
    expect(set.difference).to.be.a('function')
    expect(set.isSubset).to.be.a('function')
    expect(set.clone).to.be.a('function')
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
      set.remove(4)
      expect(set.contains(2)).to.equal(false)
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
      expect(set.intersect('hi?')).to.eql([2,3])
    })
  })

  context('.difference', () => {
    it('creates a union of two arrays', () => {
      set.add(2)
      set.add(3)
      expect(set.difference([3,4,5])).to.eql([4,5])
      expect(set.difference('hi?')).to.eql([2,3])
    })
  })

  context('.subset', () => {
    it('returns true if input is a subset of set', () => {
      set.add(2)
      set.add(3)
      set.add(4)
      set.add(5)
      expect(set.isSubset([4,5])).to.equal(true)
      expect(set.isSubset([6,7])).to.equal(false)
      expect(set.isSubset([4,5,6,7,8,9])).to.equal(false)
      expect(set.isSubset([3,5])).to.equal(true)
    })

  context('.clone()', () => {

    it('should return a Set object', () => {
      expect(set.clone()).to.be.instanceof(Set)
      expect(set.clone()).to.have.keys('content')
    })

    it('should contain all of the elements of the cloned Set', () => {
      set.add(5)
      set.add(6)
      set.add(7)
      expect(set.clone()).to.eql({'content': [5, 6, 7]})
    })

  })
  })
})