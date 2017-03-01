export default class Set {
  constructor(array) {
    this.content = array || []
  }

  add(element) {
    return !this.content.includes(element)
    ? this.content.push(element) 
    : console.log('Can only add unique elements to set.')
  }

  isEmpty() {
    return this.content.length === 0
  }

  contains(element) {
    return this.content.includes(element)
  }

  remove(element) {
    return this.content.splice(this.content.indexOf(element), 1)
  }

  forEach(cb) {
    this.content.map(element => cb(element))
  }

  size() {
    return this.content.length
  }

  union(otherSet) {
    if(!Array.isArray(otherSet)) {
      return this.content
    }
    return otherSet
      .reduce((unionArray, element) => {
        if(!unionArray.includes(element)){
          unionArray.push(element)
        }
        return unionArray
      }, this.content)
      .sort((a, b) => a > b)
  }

  intersect(otherSet) {
    if(!Array.isArray(otherSet)) {
      return this.content
    }
    return otherSet
      .reduce((intersectArray, element) => {
        if(this.content.includes(element)) {
          intersectArray.push(element)
        }
        return intersectArray
      }, [])
  }

  difference(otherSet) {
    if(!Array.isArray(otherSet)) {
      return this.content
    }
    return otherSet
      .reduce((intersectArray, element) => {
        if(!this.content.includes(element)) {
          intersectArray.push(element)
        }
        return intersectArray
      }, [])
  }

  isSubset(subSet) {
    if(subSet.length > this.content.length) {
      return false
    }
    return subSet
      .filter(element => this.content.includes(element)).length === subSet.length
  }

  clone() {
    return new Set(this.content)
  }
}