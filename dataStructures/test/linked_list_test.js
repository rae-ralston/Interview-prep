import {expect} from 'chai'
import LinkedList from '../structures/linked_list'

describe('Queue', () => {
  let list
  beforeEach(() => list = new LinkedList())

  it('is a function', () => {
    expect(LinkedList).to.be.a('function')
    expect(list.getHeadNode).to.be.a('function')
    expect(list.getTailNode).to.be.a('function')
    expect(list.contains).to.be.a('function')
    expect(list.find).to.be.a('function')
    expect(list.insert).to.be.a('function')
    expect(list.insertFirst).to.be.a('function')
    expect(list.insertBefore).to.be.a('function')
    expect(list.remove).to.be.a('function')
    expect(list.removeFirst).to.be.a('function')
    expect(list.isEmpty).to.be.a('function')
    expect(list.size).to.be.a('function')
    expect(list.clear).to.be.a('function')
  })

  // context('#enlist', () => {
  //   it('adds elements to a list', () => {
  //     list.enlist('hi')
  //     expect(list.content).to.eql(['hi'])
  //     expect(list.length).to.equal(1)

  //     list.enlist('hello')
  //     expect(list.content).to.eql(['hi', 'hello'])
  //     expect(list.length).to.equal(2)
  //   })
  // })

  // context('#delist', () => {
  //   it('returns null for an empty list', () => {
  //     let empty = new list()

  //     empty.delist()
  //     expect(empty.content).to.equal(null)
  //     expect(empty.length).to.equal(0)
  //   })

  //   it('returns the top element and decrament length', () => {
  //     list.enlist('blues')
  //     list.enlist('hip-hop')
  //     list.enlist('opera')
  //     expect(list.delist()).to.equal('blues')
  //     expect(list.length).to.equal(2)
  //   })
  // })

  // context('#front', () => {
  //   it('returns first item', () => {
  //     list.enlist('classical')
  //     list.enlist('jazz')
  //     list.enlist('psytrance')
  //     expect(list.front()).to.equal('classical')
  //     expect(list.length).to.equal(3)
  //   })
  // })

  // context('#back', () => {
  //   it('returns last item', () => {
  //     list.enlist('classical')
  //     list.enlist('jazz')
  //     list.enlist('psytrance')
  //     expect(list.back()).to.equal('psytrance')
  //     expect(list.length).to.equal(3)
  //   })
  // })

  // context('#isEmpth', () => {
  //   it('returns true for empty list', () => {
  //     expect(list.isEmpty()).to.equal(true)
  //   })

  //   it('returns false for non-empty list', () => {
  //     list.enlist('no, you\'re wrong')
  //     expect(list.isEmpty()).to.equal(false)
  //   })
  // })

  // context('#length', () => {
  //   it('returns 0 for empty list', () => {
  //     expect(list.Length()).to.equal(0)
  //   })

  //   it('returns 1 for 1 unit list', () => {
  //     list.enlist('bye boi')
  //     expect(list.Length()).to.equal(1)
  //   })

  //   it('returns 2 for 2 unit list', () => {
  //     list.enlist('i said good day')
  //     list.enlist('sir i said good day!')
  //     expect(list.Length()).to.equal(2)
  //   })
  // })
})