class Building {
  constructor(floors, hasBedroom) {
    this.floors = floors
    this.type = 'building'
    this.bedroom = hasBedroom
  }

  floorCount() {
    return this.floors
  }
  hasBedroom() {
    return this.bedroom
  }
  whatType() {
    return this.type
  }
}

class Home extends Building {
  constructor(floors, hasBedroom) {
    super()
    this.type = 'domicile'
    this.floors = floors
    this.bedroom = hasBedroom
  }
}

// let building = new Building(10, false)

// console.log("BUILDING =============")

// console.log(building.floorCount())
// console.log(building.hasBedroom())
// console.log(building)

// let house = new Home(3, true)
// console.log("house =============")
// console.log(house.floorCount())
// console.log(house.hasBedroom())
// console.log(house)



class Fruit {
  constructor(flavor, size, shape) {
    this.flavor = flavor
    this.size = size
    this.shape = shape
  }
  isItTasty() {
    return this.flavor !== 'bannana'
  }
  fruitSize() {
    return this.size
  }
  fruitShape() {
    return this.shape
  }
}

class Bannana extends Fruit {
  constructor(flavor, size, shape, isBunch) {
    super()
    this.flavor = flavor
    this.size = size 
    this.shape = shape
    this.isBunch = isBunch
  }
  isItABunch(){
    return this.isBunch
  }
}


let fruit = new Fruit('grape', 'sm', 'round')

console.log("fruit =============")

console.log(fruit.isItTasty())
console.log(fruit.fruitSize())
console.log(fruit.fruitShape())
console.log(fruit)

let bannana = new Bannana('bannana', 'lg', 'oblong', true)
console.log("bannana =============")
console.log(bannana.isItTasty())
console.log(bannana.fruitSize())
console.log(bannana.fruitShape())
console.log(bannana.isItABunch())
console.log(bannana)