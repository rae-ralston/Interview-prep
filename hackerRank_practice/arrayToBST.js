class Node {
  constructor(num) {
    this.data = num
    this.right = null
    this.left = null
  }

  setRight(num) {
    this.right = num
  }

  setLeft(num) {
    this.left = num
  }
}

const arrayToBST = (arr, start, end) => {
  let mid = Math.floor((start + end)/2)
  let BSTroot = new Node(arr[mid])
  let firstHalf = arr.slice(0, mid - 1)
  let secondHalf = arr.slice(mid + 1, arr.length)

  if(start > end) return null
  BSTroot.setLeft(arrayToBST(arr, start, mid - 1))
  BSTroot.setRight(arrayToBST(arr, mid + 1, end))

  console.log(BSTroot)
  return BSTroot
}

let a = [1,2,3,4,5,6,7,8,9]
let end = a.length - 1
arrayToBST(a, 0, end)