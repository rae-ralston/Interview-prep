/* 
n = array.length
k = number of times to rotate array
q = queries, the element at this index after rotation

Sample Input

3 2 3
1 2 3
0
1
2

Sample Output

2
3
1
*/
let arr = [1,2,3]

let circularArrayRotation = (arr, rotations) => {
  for(let i = 0; i < rotations; i++) {
    let move = arr.pop()
    console.log('move', move)
    arr.splice(0,0,move)
    console.log('the arr', arr)
  }
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
  }
}

circularArrayRotation( arr, 2 )

// let circularArrayRotation = (array, rotations, query) => {
//   for(let i = 0; i < rotations; i++) {
//     let temp = array[array.length - 1]
//     for(let j = array.length - 1; j <= 0; j--){
//       if(j === 0){
//         array[j] = temp
//         console.log('if j = 0', array[j])
//       } else {
//         array[j] = array[j-1]
//         console.log('if j > 0', array[j])
//       }
//     }
//   }
//   // for(let k = 0; k <= query - 1; k++){
//   //   console.log(array[k])
//   // }
// }

// circularArrayRotation( array, 2, 3)