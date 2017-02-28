// const set      = new Set(['A', 'B', 'C'])
// const otherSet = new Set(['B', 'C', 'E'])
// set.add('D')             // adds an element to the set.
// set.isEmpty()            // returns true if the set is empty or false if not.
// set.contains('B')        // returns true the set contains the element or false if not.
// set.remove('C')          // removes an element (if it exists) from the set.
// set.forEach(elem => console.log(elem))  // takes a callback function and passes it each element in sequence.
// set.size()               // returns the number of elements in the set.

export default class Set {
  constructor(array) {
    this.content = array
  }

  add(element) {
    return !this.content.includes(element)
    ? this.content.push(element) 
    : console.log('Can only add new elements to set.')
  }

  isEmpty() {
    return this.content.length === 0
  }

  contains(element) {
    return this.content.includes(element)
  }

  remove(element) {
    if(this.content.includes(element)) {
      return this.content.splice(this.content.indexOf(element), 1)
    }
  }

  forEach(cb) {
    for(let i = 0; i < this.content.length; i ++) {
      cb(this.content[i])
    }
  }

  size() {
    return this.content.length
  }
// set.intersect(otherSet)  // intersects the set with another set and returns the resulting set.
// set.difference(otherSet) // returns a set that contains the elements found in the set but not in otherSet.
// set.isSubset(otherSet)   // returns true if the set is a subset of otherSet or false if not.
// set.clone()              // returns a cloned set.

  union(otherSet) {
    for(let i = 0; i < otherSet.length; i++) {
      if(!this.content.includes(otherSet[i])) {
        this.content.push(otherSet[i])
      }
    }
    return this.content
  }

  intersect(otherSet) {
    let holder = []
    for(let i = 0; i < otherSet.length; i++) {
      if(this.content.includes(otherSet[i])) {
        holder.push(otherSet[i])
      }
    }
    this.content = holder
    return this.content
  }

  isSubset(otherSet) {
    if(otherSet.length > this.content.length) {
      return false
    }
  }

  clone() {

  }
}